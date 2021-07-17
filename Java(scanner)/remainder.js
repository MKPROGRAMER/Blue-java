import java.util.Scanner;
public class remi {

    public static void main(String[] args) {
        
        int num1, num2, o;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter First Number: ");
        num1 = sc.nextInt();
        
        System.out.println("Enter Second Number: ");
        num2 = sc.nextInt();
        
        sc.close();
        o = num1 % num2;
        System.out.println("Result is => "+o);
    }
}
