export async function checkFetchResponseStatus(response) {
  if (!response.ok) {
    let errorMessage = "fetch failed ".concat(response.status, " ").concat(response.statusText);

    try {
      const text = await response.text().slice(10);
      errorMessage += text;
    } catch (error) {}

    throw new Error(errorMessage);
  }
}
export function checkFetchResponseStatusSync(response) {
  if (!response.ok) {
    throw new Error("fetch failed ".concat(response.status));
  }
}
//# sourceMappingURL=check-errors.js.map