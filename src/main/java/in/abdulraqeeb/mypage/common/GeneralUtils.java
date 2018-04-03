package in.abdulraqeeb.mypage.common;

import java.util.Random;

public class GeneralUtils {

    public static int generateRandNumber(){
        Random rand = new Random();
        return rand.nextInt(100000);
    }
}
