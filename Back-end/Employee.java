import java.io.*;
import java.util.*;
import java.lang.*;

public class Employee {

    //To find the third occurrence of character
    static int in3(String s) {
        int occur = 0;
        char a = ',';
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == a) {
                occur += 1;
            }
            if (occur == 3)
                return i;
        }
        return -1;
    }

    //main method
    public static void main(String args[]) {
        String details[] = new String[51];
                ArrayList<String> dev = new ArrayList<>();
                ArrayList<String> qa = new ArrayList<>();
                ArrayList<String> man = new ArrayList<>();
//        String sample = "";
//        String sample_qa = "";
//        String sample_de = "";
                ArrayList<String> roles = new ArrayList<>();
        //read employers.txt
        try {
            File read = new File("/Users/dhanushpraveen/IdeaProjects/Task_backend/src/employees.txt");
            Scanner sc = new Scanner(read);
            for (int i = 0; i < 51; i++) {
                String s = sc.nextLine();
                details[i] = s;
            }
        } catch (FileNotFoundException e) {
            System.out.println("error");
        }



        //Store the names in the arraylist respective of destination
        for (int i = 1; i < 51; i++) {

            if ((details[i].substring(details[i].lastIndexOf(",") + 2, details[i].length() - 1)).equals("DEV")) {
                int start1 = details[i].indexOf(",", details[i].indexOf(",", details[i].indexOf(",") + 1));
                String fn = details[i].substring(details[i].indexOf(",") + 1, details[i].indexOf(' ', details[i].indexOf(",")));
                String ln = (details[i].substring(start1 + 1, in3(details[i]))).trim();
                String fulname = fn + " " + ln;
//                try {
//                    FileWriter devops = new FileWriter("devops.txt");
//                    sample_de += fulname;
//                    sample_de += "\n";
//                    devops.write(sample_de + System.lineSeparator());
//                    devops.close();
//
//                } catch (IOException e) {
//                    System.out.println("error");
//                }
                dev.add(fulname);

            } else if ((details[i].substring(details[i].lastIndexOf(",") + 2, details[i].length() - 1)).equals("QA")) {
                int start1 = details[i].indexOf(",", details[i].indexOf(",", details[i].indexOf(",") + 1));

                String fn = details[i].substring(details[i].indexOf(",") + 1, details[i].indexOf(' ', details[i].indexOf(",")));
                String ln = (details[i].substring(start1 + 1, in3(details[i]))).trim();
                String fulname = fn + " " + ln;
//                try {
//                    FileWriter quality = new FileWriter("QUALITYA.txt");
//                    sample_qa += fulname;
//                    sample_qa += "\n";
//                    quality.write(sample_qa + System.lineSeparator());
//                    quality.close();
//
//                } catch (IOException e) {
//                    System.out.println("error");
//                }
                qa.add(fulname);

            } else {
                int start1 = details[i].indexOf(",", details[i].indexOf(",", details[i].indexOf(",") + 1));

                String fn = details[i].substring(details[i].indexOf(",") + 1, details[i].indexOf(' ', details[i].indexOf(",")));
                String ln = (details[i].substring(start1 + 1, in3(details[i]))).trim();

                String fulname = fn + " " + ln;
//                try {
//                    FileWriter manager = new FileWriter("MANAGING.txt");
//                    sample += fulname;
//                    sample += "\n";
//                    manager.write(sample + System.lineSeparator());
//                    manager.close();
//
//                } catch (IOException e) {
//                    System.out.println("error");
//                }
                man.add(fulname);
            }
        }

                System.out.println(dev);
                System.out.println(qa);
                System.out.println(man);


                //developer file
                try{
                    FileWriter developer = new FileWriter("developer.txt");
                    for(String d : dev){
                        developer.write(d+System.lineSeparator());
                    }
                    developer.close();

                }
                catch (IOException e){
                    System.out.println("error");
                }

                //qa file
                try{
                    FileWriter quality = new FileWriter("QA.txt");
                    for(String d : qa){
                        quality.write(d+System.lineSeparator());
                    }
                    quality.close();

                }
                catch (IOException e){
                    System.out.println("error");
                }

                //Manager File
                try{
                    FileWriter manager = new FileWriter("Manager.txt");
                    for(String d : man){
                        manager.write(d+System.lineSeparator());
                    }
                    manager.close();

                }
                catch (IOException e){
                    System.out.println("error");
                }
    }
}