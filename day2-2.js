// Function to filter unique elements using Set
function filterUnique(arr) {
    return [...new Set(arr)];
}

// Export using CommonJS
module.exports = { filterUnique };