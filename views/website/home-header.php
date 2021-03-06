<section class="header fixed">
	<div class="container">
		<div class="row">
			<div class="col l2 s6">
				<img src="/img/logo.png" height="40" alt="Logo">
			</div>
			<div class="col l7 hide-on-med-and-down">
				<ul>
					<li><a href="#">We're Tylos</a></li>
					<li><a href="#">Clubs</a></li>
					<li><a href="#">Quick Go</a></li>
					<li><a href="#">Trending Topics</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Gallery</a></li>
				</ul>
			</div>
			<div class="col l3 right-align login-box">
				<?php
					if(isset($_SESSION['member'])){
						$db = new db;
						$member = $_SESSION['member'];
						$data = $db->get('members','full_name',"WHERE `id` = '$member'");
						?>
						<span>Hi,</span> <a href="/account/profile"><?php echo $data['result'][0][0]; ?></a> <span>|</span> <a href="/logout/" style="top: 0;"><i class="material-icons">power_settings_new</i></a> <a href="/account/" style="top: 0;"><img src="/img/account-icon.png" width="30"></a>
						<?php
					}
					else{
				?>
					<a href="/signin/">Sign In</a> <span>|</span> <a href="/register/">Register</a> <img src="/img/account-icon.png" width="30">
				<?php
					}
				?>
			</div>
		</div>
	</div>
</section>