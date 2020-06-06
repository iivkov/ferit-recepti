<?php require_once '../scripts/functions.php'?>
<!DOCTYPE html>
<html lang="en">
<body>
    <main>
    <div class="user_form">
            <form method="post" action="add.php">
                <input type="text" class="input" name="name" placeholder="Enter name" required="required" value="<?php echo $name; ?>">
                <input type="number" class="input" name="age" placeholder="Enter age" required="required" value="<?php echo $age; ?>">
                <input type="text" class="input" name="cat_info" placeholder="Enter cat info" required="required" value="<?php echo $info; ?>">
                <input type="number" class="input" name="wins" placeholder="Enter number of wins" required="required" value="<?php echo $wins; ?>">
                <input type="number" class="input" name="loss" placeholder="Enter number of loss" required="required" value="<?php echo $loss; ?>">
                <input type="file" class="input" name="image">
		        <button type="submit" class="button" name="add_btn">Add new fighter</button>
            </form>
        <div/>
    </main>
</body>
</html>