class Node
    {
        constructor(data,next=null)
        {
            this.data=data;
            this.next=next;
        }
    }
    class Linkedlist
    {
        constructor()
        {
            this.head=null;
            this.size=0;
        }
        empty()
        {
            if(this.size===0)
            console.log("This is empty");
        }
        insertAtBeginning(data)
        {
            this.head=new Node(data,this.head);
            this.size++;
        }
        insertAtLast(data)
        {
            let node=new Node(data);
            if(!this.head)
            {
                this.head=data;
            }
            else{
                let temp=this.head;
                while(temp.next)
                {
                    temp=temp.next;
                }
                temp.next=node;
            }
            this.size++;
        }
        removeFromBeginning()
        {
            if(this.size===1)
            this.head=null;
            else
            {
                this.head=this.head.next;
            }
            this.size--;
        }
        removeFromLast()
        {
            if(this.size===1)
            this.head=null;
            else{
                var temp=this.head;
                while(temp.next)
                {temp=temp.next}
                temp=null;
                this.size--;
            }
        }
        printsize()
        {
            console.log(this.size);
        }
        print()
        {
            let temp=this.head;
            while(temp)
            {
                console.log(temp)
                temp=temp.next;
            }
        }

    }
    const ll=new Linkedlist();
    ll.empty();
    ll.insertAtBeginning(52);
    ll.insertAtBeginning(55);
    ll.insertAtBeginning(26);
    ll.insertAtBeginning(322);
    ll.insertAtLast(23);
    ll.printsize();
    ll.print();
    ll.removeFromBeginning();
    ll.removeFromLast();
    ll.printsize();
    ll.print();
