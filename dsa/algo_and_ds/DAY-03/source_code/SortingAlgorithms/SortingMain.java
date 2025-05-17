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

    public static void bubbleSort(int [] arr){
        int iterations=0;
        int comparisons=0;

        for( int itr = 0 ; itr < arr.length-1 ; itr++ ){//outer for loop is for iterations
            iterations++;
            for( int pos = 0 ; pos < arr.length-itr-1 ; pos++ ){//inner for loop is for pos
                //if prev pos ele > its next pos ele i.e. if elements are not in order => swap them
                comparisons++;
                if( arr[ pos ] > arr[ pos+1 ] ){
                    swapArrayElements(arr, pos, pos+1);
                }
            }
        }
        System.out.println("no. of iterations are : "+iterations);
        System.out.println("no. of comparisons are : "+comparisons);
    }

    public static void modifiedBubbleSort(int [] arr){
        int iterations=0;
        int comparisons=0;
        boolean flag = true;

        for( int itr = 0 ; itr < arr.length-1 && flag == true ; itr++ ){//outer for loop is for iterations
            flag = false;
            iterations++;
            for( int pos = 0 ; pos < arr.length-itr-1 ; pos++ ){//inner for loop is for pos
                //if prev pos ele > its next pos ele i.e. if elements are not in order => swap them
                comparisons++;
                if( arr[ pos ] > arr[ pos+1 ] ){
                    flag = true;
                    swapArrayElements(arr, pos, pos+1);
                }
            }
        }
        System.out.println("no. of iterations are : "+iterations);
        System.out.println("no. of comparisons are : "+comparisons);
    }

    public static void insertionSort(int [] arr){
        int iterations=0;
        int while_cnt=0;

        for( int i = 1 ; i  < arr.length ; i++ ){
            iterations++;
            int key = arr[ i ];
            int j = i-1;
            
            //if pos is valid then only compare value of key with an ele at that at that pos 
            while( j >= 0 && key < arr[ j ] ){
                arr[ j+1 ] =  arr[ j ];//shift ele towards its right by 1
                j--;//goto prev ele	
                while_cnt++;
            }
            //insert key at its appropriate pos
            arr[ j+1 ] = key;
        }
        System.out.println("no. of iterations are : "+iterations);
        System.out.println("while_cnt : "+while_cnt);
    }

    public static void main(String [] args) {
        //int [] arr = { 30, 20, 60, 50, 10, 40 };
        int [] arr = { 10, 20, 30, 40, 50, 60 };
        //int [] arr = { 50, 60, 10, 20, 30, 40, 70, 80, 90, 100 };
        System.out.print("bfore sorting => "); displayArrayElements(arr);
        //selectionSort(arr);
        //bubbleSort(arr);
        //modifiedBubbleSort(arr);
        insertionSort(arr);
        System.out.print("after sorting => "); displayArrayElements(arr);
       
    }
}
