import java.util.Scanner;

import javax.management.RuntimeErrorException;

class LinkedList{
    static class Node{
        private int data;//contains actual data of type int
        private Node next;//contains reference to the next node

        public Node(int data ){
            this.data = data;
            this.next = null;
        }

    }//end of Node class

    private Node head;//4 bytes
    private int nodesCount;

    public LinkedList(){
        head = null;
        nodesCount=0;
    }

    public boolean isListEmpty( ){
        return ( head == null );
    }

    public int getNodesCount(){
        return ( this.nodesCount );
    }

    public void addNodeAtLastPosition(int data){
        //step-1: create a newnode
        Node newNode = new Node(data);
        //step-2: if list is empty then attach newly created node to the head
        if( isListEmpty() ){
            head = newNode;
            nodesCount++;
        }else{//step-3: if list is not empty
            //start traversal of list from first node
            Node trav = head;
            //traverse the list till last node
            while( trav.next != null ){
                trav = trav.next;//move trav towards its next node
            }
            //attach newly created node to the last node
            trav.next = newNode;
            nodesCount++;
        }
    }

    public void addNodeAtFirstPosition(int data){
        //step-1: create a newnode
        Node newNode = new Node(data);
        //step-2: if list is empty then attach newly created node to the head
        if( isListEmpty() ){
            head = newNode;
            nodesCount++;
        }else{//step-3: if list is not empty
            //attach cur first node into the next part of newly created node
            newNode.next = head;
            //attach newly created node to the head
            head = newNode;
            nodesCount++;
        }
    }

    //counfNodes( ) function takes O(n) time
    public int countNodes( ){
        int count = 0;

        if( !isListEmpty() ){
            //start tarversal of the list from first node
            Node trav = head;
            //traverse the list till last node
            while( trav != null ){
                count++;//increment the counter
                trav = trav.next;//move trav towards its next node
            }
        }
        return count;
    }

    public void addNodeAtSpecificPosition(int pos, int data){
        if( pos == 1 )//if pos is the first position
            addNodeAtFirstPosition(data);
        else if( pos == getNodesCount() + 1 )//if pos is the last position
            addNodeAtLastPosition(data);
        else{//if pos is inbetween position
            //create a newnode
            Node newNode = new Node(data);
            int i=1;
            //start traversal of the list from first node
            Node trav=head;
            //traverse the list till (pos-1)th node
            while( i < pos-1 ){
                i++;
                trav = trav.next;
            }
            //attach cur (pos)th node to the next part of newly created node
            newNode.next = trav.next;
            //attach newly created node to the next part of (pos-1)th node
            trav.next = newNode;
            nodesCount++;
        }
    }

    public void displayLinkedList(){
        if( isListEmpty() )
            throw new RuntimeException("list is empty !!!");
        else{//if list is not empty
            //start traversal from first node
            Node trav = head;
            //System.out.println("no. of nodes in a list are : "+countNodes());
            System.out.println("no. of nodes in a list are : "+getNodesCount());
            System.out.print("list is : head -> ");
            //traverse the list and display data part of each node
            while( trav != null ){
                System.out.printf("%d -> ", trav.data);
                trav = trav.next;//move trav towards its next node
            }
            System.out.println("null");
        }
    }
}

public class SingLinLinkedListMain {
    public static void main(String [] args ) {
        LinkedList l1 = new LinkedList();

        l1.addNodeAtLastPosition(10);
        l1.addNodeAtLastPosition(20);
        l1.addNodeAtLastPosition(30);
        l1.addNodeAtLastPosition(40);
        l1.addNodeAtLastPosition(50);
        l1.addNodeAtLastPosition(60);
        l1.addNodeAtLastPosition(80);
        l1.addNodeAtLastPosition(90);

        try{
            l1.displayLinkedList();
        }catch( RuntimeException e){
          System.out.println( e.getMessage());
        }

        //l1.addNodeAtFirstPosition(5);

        Scanner sc = new Scanner(System.in);
        int pos;

        while( true ){
            //step-1: accept position from user
            System.out.print("enter the position : ");
            pos = sc.nextInt();

            //step-2: validate position
            if( pos > 0 && pos <= l1.getNodesCount() + 1 )
                break;

            System.out.println("invalid position !!!");
        }

        l1.addNodeAtSpecificPosition(pos, 99);

        try{
            l1.displayLinkedList();
        }catch( RuntimeException e){
          System.out.println( e.getMessage());
        }
    }
}
