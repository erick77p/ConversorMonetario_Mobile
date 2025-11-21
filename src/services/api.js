const BASE_URL = "https://api.exchangerate-api.com/v4/latest"

export async function exchangeRateApi(fromCurrency) {
    try {
        const response = await fetch(`${BASE_URL}/${fromCurrency}`)
        const data = await response.json()
        console.log("🔗 API Response:", data) // Debug
        return data
    } catch(err) {
        console.log("❌ API Error:", err)
        throw err // Importante: relançar o erro
    }
}

export function convertCurrency(amount, rate) {
    console.log("🧮 Convertendo:", amount, "com taxa:", rate) // Debug
    
    const numericAmount = parseFloat(amount)
    const numericRate = parseFloat(rate)
    
    if (isNaN(numericAmount) || isNaN(numericRate)) {
        throw new Error('Valores inválidos para conversão')
    }
    
    const result = numericAmount * numericRate
    console.log("✅ Resultado da conversão:", result)
    
    return result.toFixed(2)
}