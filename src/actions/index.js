/* eslint-disable no-unused-vars */
export const incNumber = (num)=> {
    return {
     type :'INCREMENT',
     payload:num,
     }
    }
    export const decNumber = ()=> {
        return {
         type :'DECREMENT'
         }
        }
    