const API_BASE = "https://cocktails.solvro.pl/api/v1";

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

async function fetchCocktailById(id) {
  try {
    const response = await fetch(`${API_BASE}/cocktails/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new ApiError(`Cocktail with id ${id} was not found`, 404);
      } else {
        throw new ApiError("Failed to fetch cocktail by 'id'", response.status);
      }
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError("Network error or invalid API_URL", 0);
  }
}

export { fetchCocktailById };
