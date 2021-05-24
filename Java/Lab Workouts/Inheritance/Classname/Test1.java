package model;

public class Test1 {
	String fClassName;
	String className;

	public Test1(int number) {

		String dashes="";

		fClassName = getClass().toString();
		System.out.println("The Full Class Name is:\n\n" + fClassName );
		for(int i=0; i<fClassName.length();i++)
			dashes+="-";
		System.out.print(dashes + "\n\n\n");

		dashes="";
		className = fClassName.substring(fClassName.lastIndexOf(".")+1);
		System.out.println("The Class Name is:\n\n" + className );
		for(int i=0; i<className.length();i++)
			dashes+="-";
		System.out.print(dashes + "\n\n\n");

	}
}