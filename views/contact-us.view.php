<!DOCTYPE html>
<html lang="en">
    <?php require("partials/head.php") ?>
    <body>
        <?php require("partials/menu.php") ?>
        <div id="menu-colorchange">  
            <div class="main-dim" id="main">
                <?php require("partials/header.php") ?>
                <main>
                    <?php require("partials/cookies.php") ?>
                    <div id="upper">
                        <div id="link-back">
                            <div class=container>
                                <ul>
                                    <li><a href="index.php">Home</a></li>
                                    <li>Our Offices</li>
                                </ul>
                            </div>
                        </div>
                        <div id="title">
                            <div class=container>
                                Our Offices
                            </div>
                        </div>
                    </div>

                    <div id="middle">
                        <div class="container" id="offices">
                            <div id="offices-container">
                                <div id="offices-positioning">
                                    <div class="office-padding">
                                        <div class="office-location" id="cambridge-office">
                                            <div class="image">
                                                <a href="#">
                                                    <img src="images/cambridge-office.jpg" alt="Cambridge Office">
                                                </a>
                                            </div>
                                            <div class="content">
                                                <h3><a href="#">Cambridge Office</a></h3>
                                                <ul>
                                                    <li>Unit 1.31,</li>
                                                    <li>St John's Innovation Centre,</li>
                                                    <li>Cowley Road, Milton,</li>
                                                    <li>Cambridge,</li>
                                                    <li>CB4 0WS</li>
                                                </ul>
                                                <a class="phone-number" href="tel:#">01223 37 57 72</a>
                                                <a class="office-button">VIEW MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="office-padding">
                                        <div class="office-location" id="wymondham-office">
                                            <div class="image">
                                                <a href="#">
                                                    <img src="images/wymondham-office.jpg" alt="Wymondham Office">
                                                </a>
                                            </div>
                                            <div class="content">
                                                <h3><a href="#">Wymondham Office</a></h3>
                                                <ul>
                                                    <li>Unit 15,</li>
                                                    <li>Penfold Drive,</li>
                                                    <li>Gateway 11 Business Park,</li>
                                                    <li>Wymondham, Norfolk,</li>
                                                    <li>NR18 0WZ</li>
                                                </ul>
                                                <a class="phone-number" href="tel:#">01603 70 40 20</a>
                                                <a class="office-button">VIEW MORE</a>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="office-padding">
                                        <div class="office-location" id="yarmouth-office">
                                            <div class="image">
                                                <a href="#">
                                                    <img src="images/yarmouth-office.jpg" alt="Great Yarmouth Office">
                                                </a>
                                            </div>
                                            <div class="content">
                                                <h3><a href="#">Great Yarmouth Office</a></h3>
                                                <ul>
                                                    <li>Suite F23,</li>
                                                    <li>Beacon Innovation Centre,</li>
                                                    <li>Beacon Park, Gorleston,</li>
                                                    <li>Great Yarmouth, Norfolk,</li>
                                                    <li>NR31 7RA</li>
                                                </ul>
                                                <a class="phone-number" href="tel:#">01493 60 32 04</a>
                                                <a class="office-button">VIEW MORE</a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container" id="lower">
                        <div id="lower-flex">
                            <div id=form-preview-padding>
                                <div id="form-preview">
                                    <p class="prompt-title">Email us on:</p>

                                    <p class="prompt-answer"><a href="mailto:#">sales@netmatters.com</a></p>
                                    <p class="prompt-title">Speak to Sales on:</p>

                                    <p class="prompt-answer"><a href="tel:#">01603 515007</a></p>
                                    <p class="prompt-title">Business hours:</p>
                                    <p class="prompt-title">Monday - Friday 07:00 - 18:00 </p>
                                </div>
                                <div id="accordion">
                                    <div class="container">
                                        <div class="out-of-hours" id="accordion-frame">
                                            <div class="out-of-hours" id="accordion-title">
                                                <h4 id="accordion-trigger">Out of Hours IT Support
                                                    <em style="font-style: normal" class="fa fa-chevron-down rotate"></em>
                                                </h4>
                                                <div id="accordion-hidden">
                                                    <p>
                                                        Netmatters IT are offering an Out of Hours service for Emergency and Critical tasks.
                                                    </p>
                                                    <p id="accordion-hidden-special">
                                                        Monday - Friday 18:00 - 22:00 Saturday 08:00 - 16:00
                                                        <br>
                                                        Sunday 10:00 - 18:00
                                                    </p>
                                                    <p>
                                                        To log a critical task, you will need to call our main line number and select Option 2 to leave an Out of Hours voicemail. A technician will contact you on the number provided within 45 minutes of your call. 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div id="contact-us-form">
                                <form method="post" id="contact-form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>#contact-us-form" accept-charset="UTF-8"  onsubmit="return validateForm()" novalidate="novalidate">
                                    <div id="form-top">
                                        <div class="input-positioning">
                                            <div class="input-group">
                                                <label class="required">Your Name</label>
                                                <input class="form-control <?php echo $nameClass; ?>" name="name" type="text" id="name" value="<?php echo htmlspecialchars($name); ?>">
                                            </div>
                                        </div>
                                        <div class="input-positioning">
                                            <div class="input-group">
                                                <label>Company Name</label>
                                                <input class="form-control <?php echo $companyClass; ?>" name="company" type="text" id="company" value="<?php echo htmlspecialchars($company); ?>">
                                            </div>
                                        </div>
                                        <div class="input-positioning">
                                            <div class="input-group">
                                                <label class="required">Your Email</label>
                                                <input class="form-control <?php echo $emailClass; ?>" name="email" type="email" id="email" value="<?php echo htmlspecialchars($email); ?>">
                                            </div>
                                        </div>
                                        <div class="input-positioning">
                                            <div class="input-group">
                                                <label class="required">Your Telephone Number</label>
                                                <input class="form-control <?php echo $telephoneClass; ?>" name="telephone" type="text" id="telephone" value="<?php echo htmlspecialchars($telephone); ?>">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input-group">
                                        <label class="required">Message</label>
                                        <textarea class="form-control <?php echo $messageClass; ?>" name="message" cols="50" rows="10" id="message"><?php echo htmlspecialchars($message); ?></textarea>
                                    </div>
                                    <div class="input-group">
                                        <div class="checkbox">
                                            <span></span>
                                            <input id="checkbox-button" name="marketing" type="checkbox" value="1">
                                        </div>
                                        <div class="checkbox-text">        
                                            Please tick this box if you wish to receive marketing information from us.
                                            Please see our <a href="#" target="_blank">Privacy Policy</a>
                                            for more information on how we keep your data safe.
                                        </div>
                                    </div>
                                    <div id="form-submit">
                                        <button type="submit" id="form-button">Send Enquiry</button>
                                        <p><span>*</span> Fields Required</p>
                                    </div>
                                    <?php if ($formSuccess): ?>
                                    <div class="container success">Your enquiry has been sent successfully.</div>
                                    <?php endif; ?>
                                    <?php
                                        if ($formSuccess) {
                                            $name = "";
                                            $company = "";
                                            $email = "";
                                            $telephone = "";
                                            $message = "";
                                        }
                                    ?>
                                </form>
                                
                            </div>
                        </div>
                    </div>

                </main>
                <?php require("partials/sticky-header.php") ?>
                <?php require("partials/footer.php") ?>
                
                <!--JS Scripts-->
                <script src="js/plugins/jquery-3.7.1.min.js"></script>
                <script src="js/plugins/slick/slick.min.js"></script>
                <script src="js/application.js"></script>
                <script src="https://kit.fontawesome.com/9b27eb473a.js" crossorigin="anonymous"></script>
            </div>
        </div>
    </body>
</html>