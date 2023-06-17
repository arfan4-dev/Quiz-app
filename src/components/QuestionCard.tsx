import React, { useState } from 'react'
import {questionPropsType} from '../Service_Types/Sevices_Types'

const QuestionCard: React.FC<questionPropsType> = ({question, options, callback}) => {
    let [selectedAns, setSelectedAns] = useState("");

    const handleSelection = (ev: any) => {
        setSelectedAns(ev.target.value);
    }
  return (
    <div className="question-container">
            <div className="question">
                <h4>{question}</h4>
            </div>

            <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}
                className="question-form" 
                >
                {
                    options.map((opt: string, index: number) => {
                        return (
                            <div key={index}>
                                <label className="radio">
                                    <input
                                        type="radio"
                                        name="opt"
                                        required
                                        value={opt}
                                        checked={selectedAns === opt}
                                        onChange={handleSelection}
                                    />
                                    {opt}
                                </label>
                            </div>
                        )
                    })
                }
                <input type="submit" className="submit"/>
            </form>
        </div>
  )
}

export default QuestionCard