
import { useRef, useEffect, useState } from "react";
import axios from 'axios';
import Response from "./appopen";
import GenerativeAIComponent from "./googleai";

const Home1 = () => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const shut = false
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.onstart = () => {
    setListening(false)
  };
  recognition.onresult = (event) => {
    setTranscript(event.results[0][0].transcript);
  };
  recognition.onend = async() => {
    setListening(true)
    let b = []
    let d = document.getElementById("para").innerHTML;
    b.push(d)
    const result = findWordAfterOpen(b);
    console.log(d)
    if (b.includes(result) || b.includes(result)) {
      speak(` ${result} is opening`);
      window.location.href = `http://www.${result}.com`;
    }
    else if (!b.includes(result)) {
      speak(`response is being ready`)
             const response = await fetch("http://localhost:3000/response", {
    method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
     body: JSON.stringify(b),
    });
       window.location.href = "http://localhost:5173/response"
    
   }
  
  }
    // const handleGenerateContent = async () => {
    //   setLoading(true);
    //   setError(null);
    //   try {
    //     // Initialize the API client with your API key
    //     const genAI = new GoogleGenerativeAI('api keys');

    //     // Get the generative model
    //     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    //     // Define the prompt
    //     const prompt = d;

    //     // Generate content
    //     const result = await model.generateContent(prompt);
    //     const response = await result.response.text(); // Get the text from the response

    //     // Update state with the generated text
    //     setText(response);
    //   } catch (err) {
    //     setError('Failed to fetch data.');
    //   } finally {
    //     setLoading(false);
    //   }
    // }
  function speak(text) {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.pitch = 0.5; // Pitch should be between 0 and 2
    synth.speak(utterThis);

    utterThis.onend = () => {
      if (!listening) {
        recognition.start()
      }
    };
  }

  useEffect(() => {
    speak("Hello sir, I am Boss. How can I help you today?");
  }, []);

  function findWordAfterOpen(b) {
    const wordsAfterOpen = b.map(line => {
      const match = line.match(/Open\s+(\w+)/);
      const small = line.match(/open\s+(\w+)/);
      if (match) {
        return match ? match[1] : null;
      }
      else {
        return small ? small[1] : null;
      }

    });
    return wordsAfterOpen;
  }
  return (
    <div>
      <div className="flex justify-center items-center gap-4 h-[700px] bg-[url('https://i.pinimg.com/originals/f6/15/74/f615740d8ec75ad36e322ecd9da8b129.gif')]">
        <h1 id="boss" className="text-white text-7xl font-bold">BOSS</h1>
        <img src="https://c.tenor.com/ow94qLGI8WsAAAAC/ai.gif" className="w-[200px] h-[200px]" alt="" />
        <p id="para">{transcript}</p>
      </div>
      <div>
    
      </div>
    </div>
  );
};
export default Home1