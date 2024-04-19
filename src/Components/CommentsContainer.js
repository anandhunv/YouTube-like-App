import React from 'react'
import CommentList from './CommentList'




const CommentsContainer = () => {


    const commentsData = [
        {
          name: "Alice Smith",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          replies: [

            {
              name: "david",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.",
          replies: [
            {
              name: "john Smith",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          replies: [

            {
              name: "Geethu Smith",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          replies: [
            
          ]
            }
          ]
            }
            
          ]
            }
          ]
        },
       //2
       {
        name: "Alice Smith",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [

          {
            name: "david",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          {
            name: "john Smith",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [

          {
            name: "Geethu Smith",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          
        ]
          }
        ]
          }
          
        ]
          }
        ]
      },
      //3
      {
        name: "Alice Smith",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [

          {
            name: "david",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          {
            name: "john Smith",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [

          {
            name: "Geethu Smith",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          
        ]
          }
        ]
          }
          
        ]
          }
        ]
      },
      ];
      
     
    






  return (

    <div className='p-2 mx-2 -my-24 w-3/5 '>
        <h1 className='font-semibold'>Comments:</h1>
        <CommentList comments={commentsData}/>

    </div>
  )
}

export default CommentsContainer