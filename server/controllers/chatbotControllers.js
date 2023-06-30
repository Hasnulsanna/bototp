const express = require("express");
const {Configuration,OpenAIApi}=require("openai");


const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration)


exports.Chatbot = async (req,res) => {
    console.log(req.body)
    const question=req.body.question
    console.log(question);
    if(isProgrammingQuestion(question)){
        try {
            const completion = await openai.createCompletion({
                model:"text-davinci-003",
                prompt:question,
                max_tokens:2000,
            })
            console.log("sanna");
            const lines = completion.data.choices[0].text;
            const answers = lines.split("\n")

            return res.status(200).json({message:"Answer generated Successfully",questions:question,answer:answers})
        } catch (error) {
            console.error("Invalid Details:", error);
            res.status(400).json({ error: "Invalid Details" });
        }
    }
    else{
        res.status(400).json({ error: "Non programming questions" });
    }
}

function isProgrammingQuestion(question){
    const programmingKeywords = ["programming","code","developer", "software", "algorithm","python","javascript","nodejs","react","flask","django","c programming","c++","c#","html","css","bootstrap","web","app"];
    for (const keyword of programmingKeywords){
        if (question.toLowerCase().includes(keyword)){
            return true;
        }
    }
}