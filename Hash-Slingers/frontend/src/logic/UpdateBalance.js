const API_BASE_URL = 'http://localhost:5000'; // Replace this with the actual URL

export const getCurrentBalance = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/balance`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch balance');
        }
        const data = await response.json();
        return data.balance;
    } catch (error) {
        console.error('Error fetching balance:', error);
        throw error;
    }
};

export const updateBalance = async (newBalance) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/update-balance`, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ balance: newBalance }),
        });
        if (!response.ok) {
            throw new Error('Failed to update balance');
        }
        const data = await response.json();
        return data.updatedBalance;
    } catch (error) {
        console.error('Error updating balance:', error);
        throw error;
    }
};