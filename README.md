# Food-Order-App

Stage 2 Items Added: 
From an array Dummy:
Looks like this after addition:
![stageItems](https://user-images.githubusercontent.com/103827746/192074904-0421d04f-03a0-4b93-be88-1665e7377bbd.JPG)


Stage 3 Input Form Added:
Input component created which can change character with passed object properties into it. 
Looks like this in code: 

----------------------------------

   const Input = (props) => {
    return (
      <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}/>
      </div>
    )
  }

  export default Input

----------------------------------
code: for passing props object:

       <Input label='Amount' input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        defaultValue: '1',
      }} />

----------------------------------
Looks like this Ater addition:
![stageForm](https://user-images.githubusercontent.com/103827746/192076651-62f361e3-fc60-42d7-8518-0fad2cb68291.JPG)


Stage 4 Cart Modal overlays added: 
Had to create a portal with an id in index.html
Target that div in html by id and save it to a variable.

pass the modal to the target dom.

Looks like this after addition:
![StageModalCart](https://user-images.githubusercontent.com/103827746/192083448-c83a216e-69fc-47f5-843d-3530fdbd3484.JPG)



Stage 5 Cart items added, count , total price, duplicate ordering, deleting the cart items:
useContext, refs etc are used. Add(+) remove(-) buttons in the cart added.
![StageCartItems](https://user-images.githubusercontent.com/103827746/192658185-2b3abab9-d23b-4b5f-ac59-358a815d8bd2.JPG)
