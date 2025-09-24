const API_BASE = "https://cocktails.solvro.pl/api/v1";

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

function otherParamsToString(otherParams = {}) {
  const queryString = Object.entries(otherParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return queryString ? `&${queryString}` : "";
}

async function fetchCocktailById({ id }) {
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

async function fetchCocktails({
  page = 1,
  perPage = 20,
  id = "",
  otherParams = {},
}) {
  try {
    if (page < 1) {
      throw new ApiError(`Page ${page} was not found`, 404);
    }

    if (otherParams.name) {
      const encodeQuery = (value) => value.trim().replace(" ", "+");

      otherParams.name = `%${encodeQuery(otherParams.name)}%`;
    }

    const response = await fetch(
      `${API_BASE}/cocktails?page=${page}&perPage=${perPage}${
        id ? "&id=" + id : ""
      }${otherParamsToString(otherParams)}`
    );

    if (!response.ok) {
      throw new ApiError("Failed to fetch cocktails", response.status);
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

async function fetchCategories() {
  try {
    const response = await fetch(`${API_BASE}/cocktails/categories`);

    if (!response.ok) {
      throw new ApiError(
        "Failed to fetch cocktail categories",
        response.status
      );
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

async function fetchGlasses() {
  try {
    const response = await fetch(`${API_BASE}/cocktails/glasses`);

    if (!response.ok) {
      throw new ApiError("Failed to fetch info about glasses", response.status);
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

export { fetchCocktailById, fetchCocktails, fetchCategories, fetchGlasses };
