import axios from "axios";

const promptGemini = async (promptMessage) => {
  const response = await axios.post(
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

  return response.data.contents[0].parts[0].text;
};

export default promptGemini;
