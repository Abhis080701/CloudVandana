public class pangramCheck {
    public static void main(String[] args) {
        String sentence = "The quick brown fox jumps over the lazy dog";
        boolean[] mark = new boolean[26];
        int index;
        boolean isPangram = true;

        for (int i = 0; i < sentence.length(); i++) {
            char ch = sentence.charAt(i);
            if ('A' <= ch && ch <= 'Z') {
                index = ch - 'A';
            } else if ('a' <= ch && ch <= 'z') {
                index = ch - 'a';
            } else {
                continue;
            }
            mark[index] = true;
        }

        for (boolean value : mark) {
            if (!value) {
                isPangram = false;
                break;
            }
        }

        if (isPangram) {
            System.out.println("The sentence is a Pangram.");
        } else {
            System.out.println("The sentence is not a Pangram.");
        }
    }
}
