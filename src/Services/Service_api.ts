import { QuizQuestion,Quiz } from "../Service_Types/Sevices_Types"
const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)
export const FetchApi=async (totalQuestions:number, level:string):Promise<Quiz[]>=>{
    const res= await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    const {results}=await res.json()
    const quiz:Quiz[]=results.map((questionObj:QuizQuestion)=>{
        return {
            question:questionObj.question,
            answer:questionObj.correct_answer,
            correct_answer:questionObj.correct_answer,
            options:shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    

    })
    return quiz
}

