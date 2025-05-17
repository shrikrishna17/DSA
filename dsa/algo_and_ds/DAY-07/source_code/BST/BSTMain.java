import javax.swing.text.AbstractDocument.LeafElement;

import java.util.Stack;

class BST{

    static class Node{
        private int data;
        private Node left;
        private Node right;

        public Node(int data){
            this.data = data;
            this.left = null;
            this.right = null;
        }

    }//end of Node class

    private Node root;//it is a reference which contains an addr/ref of root node if bst is not empty

    public BST( ){
        root = null;//intially bst is empty
    }

    public boolean isBSTEmpty( ){
        return ( root == null );
    }

    /* we can add as many as we want no. of nodes into the BST in O(log n) time,
       as to find/search position of newly created node takes O(log n) time.
    */

    public void addNode(int data){
        //step-1: create a newNode
        Node newNode = new Node(data);
        //step-2: if BST is empty then attach newly created node to the root
        if( isBSTEmpty() ){
            root = newNode;
        }else{//step-3: if BST is not empty
            //find an approripriate position of a newly created node in a BST and attach it by traversing BST
            //start traversal of BST from root node
            Node trav = root;

            while( true ){
                if( data < trav.data ){//node will be a part of left subtree of cur node
                    if( trav.left == null ){//if left subtree of cur node is empty
                        //attach newly created node as a left child of cur node
                        trav.left = newNode;
                        break;
                    }else{//if cur node is having left subtree => goto its left subtree
                        trav = trav.left;
                    }
                }else{//if( data >= trav.data )//node will be a part of right subtree of cur node
                    if( trav.right == null ){//if right subtree of cur node is empty
                        //attach newly created node as a right child of cur node
                        trav.right = newNode;
                        break;
                    }else{//if cur node is having right subtree => goto its right subtree
                        trav = trav.right;
                    }
                }
            }
        }//end of else
    }//end of addNode() method

    public void recAddNode(Node trav, int data){
        //base condition
        if( trav == null )
            return;

        if( data < trav.data ){//=> node will be a part of left subtree of cur node
            if( trav.left == null ){//if left subtree of cur node is empty
                //create a newnode and attach it as left child of cur node
                trav.left = new Node(data);
            }else{//if cur node is having left subtree => goto its left subtree
                recAddNode(trav.left, data);
            }
        }else{//if( data >= trav.data ) => node will be a part of right subtree of cur node
            if( trav.right == null ){//if left right subtree of cur node is empty
                //create a newnode and attach it as right child of cur node
                trav.right = new Node(data);
            }else{//if cur node is having right subtree => goto its right subtree
                recAddNode(trav.right, data);
            }
        }
    }

    public void recAddNode(int data){
        //if BST is empty then a create a newnode and attach it to the root
        if( isBSTEmpty() ){
            root = new Node(data); 
        }else{//if BST is not empty
            recAddNode(root, data);//initialization
        }
    }

    public void preOrder(Node trav){
        //base condition
        if( trav == null )
            return;

        //VLR
        System.out.printf("%4d", trav.data);//visit data of cur node
        preOrder(trav.left);//goto visit its left subtree
        preOrder(trav.right);//goto visit its right subtree
    }

    public void preOrder(){
        if( !isBSTEmpty() ){
            System.out.print("preorder traversal is : ");;
            preOrder(root);//initialization
            System.out.println();
        }else
            System.out.println("bst is empty !!!");
    }

    public void inOrder(Node trav){
        //base condition
        if( trav == null )
            return;

        //LVR
        inOrder(trav.left);//goto visit its left subtree
        System.out.printf("%4d", trav.data);//visit data of cur node
        inOrder(trav.right);//goto visit its right subtree
    }

    public void inOrder(){
        if( !isBSTEmpty() ){
            System.out.print("inorder traversal is  : ");;
            inOrder(root);//initialization
            System.out.println();
        }else
            System.out.println("bst is empty !!!");
    }

    public void postOrder(Node trav){
        //base condition
        if( trav == null )
            return;

        //LRV
        postOrder(trav.left);//goto visit its left subtree
        postOrder(trav.right);//goto visit its right subtree
        System.out.printf("%4d", trav.data);//visit data of cur node
    }

    public void postOrder(){
        if( !isBSTEmpty() ){
            System.out.print("postorder traversal is: ");;
            postOrder(root);//initialization
            System.out.println();
        }else
            System.out.println("bst is empty !!!");
    }

    public void nonRecPreOrder( ){
        //if BST is not empty
        if( !isBSTEmpty() ){
            Stack<Node> s = new Stack<Node>();
            //start traversal from root node
            Node trav = root;
            System.out.print("preorder traversal is : ");
            while( trav != null || !s.empty( ) ){//outer while loop
                
                while( trav != null ){//inner while loop
                    //visit cur node
                    System.out.printf("%4d", trav.data);
                    
                    //push right child cur node onto the stack if it is having
                    if( trav.right != null )
                        s.push(trav.right);

                    //goto its left subtree
                    trav = trav.left;
                }//end of inner while loop

                //pop element from the stack if stack is not empty
                if( !s.empty() ){
                    trav = s.pop();
                }

            }//end of outer while loop
            System.out.println();
        }else
            System.out.println("bst is empty !!!");
    }

    public void nonRecInOrder( ){
        //if BST is not empty
        if( !isBSTEmpty() ){
            Stack<Node> s = new Stack<Node>();
            //start traversal from root node
            Node trav = root;
            System.out.print("inorder traversal is  : ");
            while( trav != null || !s.empty( ) ){//outer while loop
                
                while( trav != null ){//inner while loop
                    //push cur node onto the stack
                    s.push(trav);

                    //goto its left subtree
                    trav = trav.left;
                }//end of inner while loop

                //if stack is not empty
                if( !s.empty() ){
                    //pop element from the stack 
                    trav = s.pop();
                    //visit cur node
                    System.out.printf("%4d", trav.data);
                    //goto its right subtree
                    trav = trav.right;
                }

            }//end of outer while loop
            System.out.println();
        }else
            System.out.println("bst is empty !!!");
    }
}

public class BSTMain {
    public static void main(String[] args) {
        //create an empty BST        
        BST t1 = new BST();
        //Binary Search Tree => Input Order : 50 20 90 85 10 45 30 100 15 75 95 120 5 50
        /*
        t1.recAddNode(50);
        t1.recAddNode(20);
        t1.recAddNode(90);
        t1.recAddNode(85);
        t1.recAddNode(10);
        t1.recAddNode(45);
        t1.recAddNode(30);
        t1.recAddNode(100);
        t1.recAddNode(15);
        t1.recAddNode(75);
        t1.recAddNode(95);
        t1.recAddNode(120);
        t1.recAddNode(5);
        t1.recAddNode(50);
        */
        t1.addNode(50);
        t1.addNode(20);
        t1.addNode(90);
        t1.addNode(85);
        t1.addNode(10);
        t1.addNode(45);
        t1.addNode(30);
        t1.addNode(100);
        t1.addNode(15);
        t1.addNode(75);
        t1.addNode(95);
        t1.addNode(120);
        t1.addNode(5);
        t1.addNode(50);

        t1.preOrder();
        t1.nonRecPreOrder();

        t1.inOrder();
        t1.nonRecInOrder();

        //t1.postOrder();        

    }
}
