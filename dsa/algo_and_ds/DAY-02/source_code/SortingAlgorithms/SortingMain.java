public class SortingMain {

    public static void displayArrayElements(int [] arr){
        System.out.print("array ele's are : ");
        for( int index = 0 ; index < arr.length ; index++ ){
            System.out.printf("%4d", arr[ index ] );
        }
        System.out.println();
    }
    
    public static void swapArrayElements(int [] arr, int i, int j){
        int temp = arr[ i ];
        arr[ i ] = arr[ j ];
        arr[ j ] = temp;
    }

    public static void selectionSort(int [] arr){
        int iterations=0;
        int comparisons=0;

        for( int sel_pos = 0 ; sel_pos < arr.length-1 ; sel_pos++ ){//outer for loop is for iterations
            iterations++;
            for( int pos = sel_pos+1 ; pos < arr.length ; pos++ ){//inner for loop is for pos
                //if( ele at sel_pos > ele at pos ) => swap them 
                comparisons++;
                if( arr[ sel_pos ] > arr[ pos ] )
                    swapArrayElements(arr, sel_pos, pos);
            }
        }

        System.out.println("no. of iterations are : "+iterations);
        System.out.println("no. of comparisons are : "+comparisons);

    }

    public static void main(String [] args) {
        //int [] arr = { 30, 20, 60, 50, 10, 40 };
        //int [] arr = { 10, 20, 30, 40, 50, 60 };
        int [] arr = { 50, 60, 10, 20, 30, 40, 70, 80, 90, 100 };
        System.out.print("bfore sorting => "); displayArrayElements(arr);
        selectionSort(arr);
        System.out.print("after sorting => "); displayArrayElements(arr);
       
    }
}
