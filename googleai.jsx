// src/GenerativeAIComponent.jsx
import React, { useEffect, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai'; // Import the package

const GenerativeAIComponent = () => {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGenerateContent = async () => {
        setLoading(true);
        setError(null);
        try {
            // Initialize the API client with your API key
            const genAI = new GoogleGenerativeAI('api keys');
             
            // Get the generative model
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            
            // Define the prompt
            const response1 = await fetch("http://localhost:3000/response", {
                method: "POST",
                  headers: {
                  "Content-Type": "application/json",
                  },
             
                });
                const data= await response1.json()
            console.log(data.prompt)
            const prompt =data.prompt;
            
            // Generate content
            const result = await model.generateContent(prompt);
            const response = await result.response.text(); // Get the text from the response

            // Update state with the generated text
            setText(response);
        } catch (err) {
            setError('Failed to fetch data.');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
   
    handleGenerateContent()
     
    }, [])
    

    return (
        <div>
           
            
 
           
            {text && (
                <div>
                    <h2>Generated AI:</h2>
                    <pre>{text}</pre>
                </div>
            )}
        </div>
    );
};

export default GenerativeAIComponent;
