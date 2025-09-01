import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const promptGemini = async (promptMessage) => {
  const result = await axios.post(
    process.env.GEMINI_URI,
    {
      contents: [
        {
          parts: [
            {
              text: promptMessage,
            },
          ],
        },
      ],
    },
    {
      headers: {
        "X-goog-api-key": process.env.GEMINI_API_KEY,
      },
    }
  );
  return result.data.candidates[0].content.parts[0].text;
};

export default promptGemini;
