const html = `
<html>
    <head>
        <title>Form</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
        <body>
        <form action = "/new_visitor" method = "POST">
            <label for="vname">Visitor Name:</label><br>
            <input type="text" id="vname" name="vname" placeholder="Enter your name" required><br>
            <label for="aname">Assistant Name:</label><br>
            <input type="text" id="aname" name="aname" placeholder="Enter assistant's name" required><br>
            <label for="age">Age:</label><br>
            <input type="int" id="age" name="age" placeholder="Enter your age" required><br>
            <label for="date">Date of Visit:</label><br>
            <input type="date" id="date" name="date" placeholder="Enter date of your visit" required><br>
            <label for="time">Time of Visit:</label><br>
            <input type="time" id="time" name="time" placeholder="Enter time of your visit" required><br>
            <label for="comments">Comments:</label><br>
            <textarea name="comments" id="comments" cols="20" rows= "10"></textarea><br>
            <input type="submit" value="Submit"> 

        </form>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Visitor</th>
                        <th>Assistant</th>
                        <th>Age</th>
                        <th>Date Of visit</th>
                        <th>Time of Visit</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody id="visitors"></tbody>
            </table>
        </div>
        <script type="text/javascript" src="main.js"></script>
  
      </body> 
</html>`;

module.exports = html;
