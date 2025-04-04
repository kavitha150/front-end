import React, { useState } from "react";
import axios from "axios";
import "./ThreatScanner.css";

const ThreatScanner = () => {
    const [url, setUrl] = useState("");
    const [result, setResult] = useState("");

    const scanWebsite = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/threats/scan?url=${url}`);
            setResult(response.data);
        } catch (error) {
            setResult("Error scanning the website");
        }
    };

    return (
        <div>
            <h2>🔍 Website Threat Scanner</h2>
            <input type="text" placeholder="Enter website URL" value={url} onChange={(e) => setUrl(e.target.value)} /><br></br>
            <button onClick={scanWebsite}>Scan</button>
            <p>{result}</p>
        </div>
    );
};

export default ThreatScanner;
