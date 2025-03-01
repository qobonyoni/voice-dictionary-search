import { error } from "console";
import { useEffect, useReducer } from "react";

type initialStateTypes = {
    isListening: boolean;
    transcript: string;
    error: string;
}

const initialState: initialStateTypes = {
    isListening: false,
    transcript: "",
    error:""
    
    
}

function reducer(state,action) {
    switch (action.type) {
        case "rejected":
            return{ ...state,error:action.payload}
        case "transcribe":
            return{ ...state,transcript:action.payload}
        case "listening":
            return { ...state, isListening: action.payload }
            default:
                throw new Error("Unknown action type");
    }
}

function useSpeechRecognition(onResult?: (text: string) => void) {
    
    const [{error,transcript,isListening}, dispatch] = useReducer(reducer, initialState);
    
    useEffect(() => {
        if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
            dispatch({ type: "rejected", payload: "Speech recognition is not supported in this browser." });
          return;
        }
    }, []);
    
    function startListening()  {
            const SpeechRecognition =
            (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
        
            recognition.continuous = false; // Stops after one result
            recognition.lang = "en-US";
            recognition.interimResults = false; // Final results only
            recognition.maxAlternatives = 1;
        
        recognition.onstart = () => dispatch({ type: "listening", payload:true });
            recognition.onend = () => dispatch({ type: "listening", payload:false });
        recognition.onerror = (event:any) =>
            dispatch({ type: "rejected", payload: event.error });
            
          
        recognition.onresult = (event: any) => {
            const text = event.results[0][0].transcript;
            onResult && onResult(text); 
            dispatch({ type: "transcribe", payload: text })
            
    
    
            }
            
        
            recognition.start();
          };
        
    
    
return {
    isListening,
    transcript,
    error,
    startListening
};

}

export default useSpeechRecognition;
