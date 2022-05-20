
'Import the cryptography namespaces
Imports System.Security.Cryptography
Imports System.Text
Imports System.Drawing.Imaging
Imports System.IO
Imports System.Globalization
Imports System.Threading
Imports System
Imports System.Data.SqlClient

Public Class Form1
    'Declare global variables
    ' Cloud database server parameters
    Public ServerName As String = "154.16.171.81,18836"
    Public BaseConnectionString As String = "Server=" + ServerName + ";Database=InstantMessenger; Trusted_Connection=No;MultipleActiveResultSets=true;"
    ' Credentials to be used for testing connecting to server i.e. to check is server is available
    Public ConTestUserName As String = "CryptoDemoUser"
    Public ConTestPassword As String = "*CryptoDemoUser2022#"
    Public ServerAvailable As Boolean = False
    ' SQL connection variables 
    Public sqlConnection As SqlConnection
    Private myCmd As SqlCommand
    Private myReader As SqlDataReader
    ' Encryption an decryption variables
    Dim textbytes, encryptedtextbytes As Byte()

    Dim encoder As New UTF8Encoding

    Dim Reciever As String = ""

    ' Arraylists for storing UserIDs and their corresponding public keys for subscribers/contacts in the messaging service
    Dim SubscriberUserIDs As ArrayList = New ArrayList()
    Dim SubscriberPublicKeys As ArrayList = New ArrayList()


    Private Function EncryptMessage(ByVal TextToEncrypt As String, ByVal PublicKey As String) As String
        'Initialize Encryptor with Reciever's Public Key
        'Use UTF8 to convert the text string into a byte array
        'Convert the encrypted byte array into a Base64 string for display purposes
        Return ("") ' Replace "" with the string to be returned by this function.
    End Function

    Private Function DecryptMessage(ByVal TextToDecrypt As String) As String
        'Initialize Encryptor with Reciever's Public Key
        ' Convert ciphertext into byte array
        'get the decrypted clear text byte array
        'convert the byte array to text using the same encoding format that was used for encryption
        Return ("") ' Replace "" with the string to be returned by this function.
    End Function

    Private Sub SendMessage()
        'Insert Message to be sent into the Chat Window. The message should be in green and righ aligned.
        ' Send Message to Messaging Server
        ' Encrypt the message with public key of reciever and encrypt its copy with the public key of the sender. This makes it possible to decrypt both sent and recieved 
        ' messages on the chat window
        ' Clear Message imput textbox for the next message       
    End Sub
    Private Sub AppendSentMessage(ByVal m As String)
        'Insert Message to be sent into the Chat Window, align it to the right and in green color        
    End Sub
    Private Sub AppendRecievedMessage(ByVal m As String)
        'Insert Message recieved into the Chat Window, align it to the left in black color.
    End Sub


    Private Sub SendMessageButton_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles SendMessageButton.Click
        'Clicki this button should invoke the SendMessage method. It should not be possible to send a message if not reciever is selected and if the message input box is empty.
    End Sub
    Public Function GetDateToday() As Date
        'Get today's date, formatted as yyyy-MM-dd        
    End Function

    Public Function GetTimeNow() As Date
        'Get the current time, formatted as HH:mm:ss        
    End Function

    Public Sub LogMessage(ByVal Sender As String, ByVal Reciever As String, ByVal MessageContent As String, ByVal MessageContentCopy As String, ByVal MessageHash As String, ByVal Status As String)
        'Save the sent message to the database server.        
    End Sub

    Public Sub ActivateUserAccount()
        ' Generate public and private keys
        ' Store Public Key in the Cloud database and store Private Key in the device        
    End Sub

    Shared Function GetHash(ByVal Input As String) As String
        'Create the hash of the message
        Return ("") 'Replace "" with the string to be returned by the method
    End Function

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        ' Create a temporary connection to Server
        ' Use the temporal connection to check if Server is available. 
        ' If Server is available display the Authentication screen to request the user for their credentials.
        ' Quit the application if Instant Messaging Server is not available. 
        ' Retrieve all subscibers and display the subscriber list in Contacts
        ' Check if the user account is activated. Prompt user to click the Activate Account button to activate the account.
    End Sub

    Private Sub InputMessageTextBox_KeyPress(ByVal sender As System.Object, ByVal e As System.Windows.Forms.KeyPressEventArgs) Handles InputMessageTextBox.KeyPress
        'Pressing the ENTER key while the InputMessageTextBox has focuss, should have the same effect as clicking the Send Message button 
    End Sub
    Private Sub RetrieveMessages()
        ' Query the database for messages that were either sent by this subscriber or sent to this subscriber 
        ' If message sent by this subscriber, append it as right justified on the chat window and color the message as green.
        ' If message was sent to this subscriber, append it as left justified on the chat window and color the text black.
        ' For all message (sent or received), use their hashes to check if they are not been tampered with.

    End Sub
    Private Sub ContactsListBox_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ContactsListBox.SelectedIndexChanged
        ' Set the selected contact as the current message reciever/recipient
        ' Clear the chat window, retrieve and display all chat messages between the selected contact and this subscriber
    End Sub

    Private Sub ActivateAccount_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ActivateAccount.Click
        'If the subscriber account is not activated, call the method for activate it here. 
        'If the account is already activated, display a message showing the account is already activated        
    End Sub

    Private Sub LoadKeys()
        ' Retrieve private key from local file and retrieve the public key from the Cloud database
    End Sub

    Private Sub ContactsListBox_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ContactsListBox.Click
        'Initially the Send Message button is disabled. Add code here to enable the Send Message button to be enabled when a contact is selected.
    End Sub
    Private Sub ChatUpdateTimer_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ChatUpdateTimer.Tick
        ' Automatical retrieve new chat messages between the user and the selected subscriber from the server.
        ' Add the new messages to the chat window. 
    End Sub

    Private Sub ChangePassword_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ChangePassword.Click
        ' If the subscriber has supplied the correct credentials to show that he/she is the owner of this account, update his password to the new one.
    End Sub
End Class

