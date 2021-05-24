package simpleapp;


//TODO 01: make this class an application (inherit from Application) and fix the errors
	//         It should ask you to add the start method.
public class SimpleApp{

	// TODO 19: Move the Button and Label variables such they become instance
			//variables instead of local variables // this is because we want to access
			//them outside of the "start" method.

		
		/*
		 * 
		 * Copy the following TODOs to the implemented start method.
		 * 
		 * //TODO 02: create a new VBox layout pane (its our container) and call it
		 * //root.
		 * 
		 * //TODO 03: create a Label object (call it myLabel) and put the text
		 * //"Hello There!" in it.
		 * 
		 * 
		 * //TODO 04: create a Button object (call it myButton) and put the text
		 * //"CLICK ME" in it.
		 * 
		 * 
		 * //TODO 05: add the label and button to the vbox container.
		 * 
		 * 
		 * //TODO 06: create a new Scene object (call it myScene), and add the container
		 * //myVBox to it. Also, make the size of the Scene 300x400
		 * 
		 * //TODO 07: set the Scene inside the stage given to us as a parameter from the
		 * //Java program.
		 * 
		 * 
		 * //TODO 08: show the stage.
		 * 
		 * 
		 * //TODO 11: set the alignment of the buttons to be in the center.
		 * 
		 * 
		 * //TODO 12: change the title of the window to "My Wonderful App"
		 * 
		 * // TODO 16: create a new object of your MyHandler class (step 2 in the slides)
		 *
		 * // TODO 17: add the handler to your button and test it (step 3 in the slides)
		 *
		 * // TODO 18: Question! what if I want to change our "label" text when the
		 * //button is pressed? (go to the next todo!)
		 * 
		 * 
		 * // TODO 22: create an object of this class (step 2) 
		 * 
		 * // TODO 23: add it to the same button (can we?) (step 3) 
		 * 
		 * // TODO 24: create a third handler Object and assign it to your button
		 * // directly (anonymous object magic method) // This is step 1, 2, and 3 combined
		 * // in one line! // Make the handle method print "I am anonymous!"
		 *
		 * // TODO 25: Can we use the same "SimpleApp" class (this Application class!) as a handler? try implementing EventHandler in the main class
		 * //          Question: how would you add the handler to the Button UI Component? try it!
		 */
		  
		  //******* HANDLING EVENTS *******
		  
		  /*	TODO 13: create a handler class MyHandler (independent one) and make it implement EventHandler<ActionEvent>
		   *  
		   *  //TODO 14: make the handle method display "BUTTON PRESSED" every time the button is pressed.
		   *  
		   *  //TODO 15: run the program. Does the button show the message now when pressed? Continue to Todo 16
		   */
		  
		  
		  

	//TODO 09: write a public static void main method to "launch" your app.

	
	//TODO 10: run the program to test that it is working ok.
	
	
	
	// TODO 20: create a new "inner" class called MyInnerHandler inside of this class (yes a class inside another class) (step 1 again)
	// TODO 21: make the handle method change the label text to "Hello from inside!"
	

	
	// Extra Practice: Can you make the label update to the current position of the mouse.
	// Hints:          You will need the MOUSE_MOVED event handler from the MouseEvent Class, 
	//                 and methods getX() and getY() from the event object in your handle method.
}
