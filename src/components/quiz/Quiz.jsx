import React, {useState, useEffect} from 'react'
import {Helmet} from 'react-helmet'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import useStyles from './Styles'
import questions from '../../questions.json'
import isEmpty from '../../utils/IsEmpty'
import M from 'materialize-css'
import './test.css'


const Quiz =() =>{
   const classes = useStyles()
   const [question, setQuestion] = useState(questions)
   const [currentQuestion, setCurrentQuestion] = useState([])
   const [nextQuestion, setNextquestion] = useState({})
   const [prevQuestion, setPrevquestion] = useState({})
   const [answer, setAnswer] = useState('')
   const [numberofquestions, setnumberofQuestions] = useState(0)
   const [numberofAnsweredQuestions, setnumberofAnsweredquestions] = useState(0)
   const [currentQuestionIndex, setCurentQuestionIndex] = useState(0)
   const [score, setScore] = useState(0)
   const [correctAnswers, setcorectAnswers] = useState(0)
   const [wrongAnswers, setwrongAnswers] = useState(0)
   const [hints, setHints] = useState(5)
   const [fiftyFifty, setfiftyFifty] = useState(5)
   const [usedfiftyFifty, setusedfiftyFifty] = useState(false)
   const  [time, setTime] = useState({})

   const displayQuestions = (questions=question, currentQuestion, nextQuestion, prevQuestion  ) =>{
      if(!isEmpty(question)){
        questions = question;
        currentQuestion = questions[currentQuestionIndex]
        const rightAnswer = currentQuestion.answer
        nextQuestion = questions[currentQuestionIndex  + 1] 
        prevQuestion = questions[currentQuestionIndex  - 1] 
        

        setCurrentQuestion({currentQuestion})
        setNextquestion({nextQuestion})
        setPrevquestion({prevQuestion})
       
      
        return rightAnswer
      }
      
      
   }

   useEffect(() =>{
      displayQuestions(question, currentQuestion, nextQuestion, prevQuestion)
   }, [])

   const handleClick =(e ) =>{
      const answer =  displayQuestions()
      e.target.innerHTML == answer?  correctAnswer() : wrongAnswer()
   
   }

   const correctAnswer =() =>{
  
    M.toast({
      html: 'Çorrect Answer',
      displayLength:1500,
      classes :'rounded'
    });
    
      setScore(prevScore => prevScore + 1)
     setcorectAnswers(prevCorrectAnswers => prevCorrectAnswers + 1)
    setCurentQuestionIndex(prevCurrentQuestionIndex => prevCurrentQuestionIndex + 1 )
    setnumberofAnsweredquestions(prevNumberofAnsweredQuestions => prevNumberofAnsweredQuestions + 1),
    displayNewquestions()

   }

   const wrongAnswer =() =>{
     navigator.vibrate(1000)
    M.toast({
      html: 'Wrong answer',
      classes:'rounded' ,
      displayLength:1500
    })
    setwrongAnswers(prevWrongAnswers => prevWrongAnswers + 1)
   setCurentQuestionIndex(prevCurrentQuestionIndex => prevCurrentQuestionIndex + 1)
   setnumberofAnsweredquestions(prevNumberofAnsweredQuestions => prevNumberofAnsweredQuestions + 1),
   displayNewquestions()
  }
 const displayNewquestions =() =>{
  displayQuestions(questions, currentQuestion, nextQuestion, prevQuestion )
 }
   
   
  return(
    
    <>
    <Helmet><title>Quiz Page</title></Helmet>
      <h2 style={{textAlign:'center'}}>Quiz Mode</h2>
      <div className={classes.questions}>
       <div className={classes.lifeline}>
          <p>
            <AllInclusiveIcon />
            2
          </p>
          <p>
            <EmojiObjectsIcon />
            5
          </p>
      
        </div>
        <p>
          <span style={{float:'left'}}>{numberofAnsweredQuestions} 0f 15</span>
         <span style={{float:'right'}}><QueryBuilderIcon /> 2:15</span> 
        </p>
    <div>
    </div>
      <div>
     { Object.keys(currentQuestion).map((item) =>(
       <div>
        <h5 className={classes.heading}>{currentQuestion[item].question}</h5>
        <div className={classes.optionsContainer}>
        <p onClick={handleClick} className={classes.option}>{currentQuestion[item].optionA}</p>
        <p onClick={handleClick} className={classes.option}>{currentQuestion[item].optionB}</p>
        </div>
        <div className={classes.optionsContainer}>
          <p onClick={handleClick} className={classes.option}>{currentQuestion[item].optionC}</p>
          <p onClick={handleClick} className={classes.option}>{currentQuestion[item].optionD}</p>
        </div>
        
       </div>
                 
               
            
     ))}
      </div>
    {/* <div>
        <h5 className={classes.heading}>{currentQuestion.question}</h5>
        <div className={classes.optionsContainer}>
        <p onClick={handleClick} className={classes.option}>{currentQuestion.optionA}</p>
        <p onClick={handleClick} className={classes.option}>{currentQuestion.optionB}</p>
        </div>
        <div className={classes.optionsContainer}>
          <p onClick={handleClick} className={classes.option}>{currentQuestion.optionC}</p>
          <p onClick={handleClick} className={classes.option}>{currentQuestion.optionD}</p>
        </div>
        
       </div> */}

        
        <div className={classes.buttonContainer}>
        <button  className={classes.button} style={{backgroundColor:'blue', transition:'0.2s linear all'}}>Previous</button>
        <button  className={classes.button} style={{backgroundColor:'green', transition:'0.2s linear all'}}>Next</button>
        <button  className={classes.button} style={{backgroundColor:'red', transition:'0.2s linear all'}}>Quit</button>
        </div>
      </div>

    </>
  )
}

export default Quiz