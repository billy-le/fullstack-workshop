# Using Robo 3T

So far we've been logging out our documents if it is found. It's time to upgrade to a nice interface to help us find our collections and documents quickly. Let's use Robomongo's incredible [Robo 3T](https://robomongo.org/download) program.

### Step

1.  Go to the website and download Robo 3T.

2.  When the installation is done, open the application

3.  You will be prompted to make a new connection. Click on create and then name your new database, `todoApp`.

4.  Use the default address of `27017` and then click okay.

5.  You should see a new database named `todoApp` on the left hand side. Double click on that and then the folder `Collections`.

6.  You should see a `todoItem` collection in that folder. When you double-click on the `todoItem` you should see all the documents we saved through our program so far!

7.  Robo 3T can create, read, update, and delete from the (GUI) Graphical User Interface. I wanted to show you this because it's much easier to view your documents. But we will be doing the updating and deleting of documents in the next few steps before we finish creating our express routes.
