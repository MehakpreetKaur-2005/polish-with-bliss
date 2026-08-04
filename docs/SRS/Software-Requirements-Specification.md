Software Requirements Specification (SRS)
Polish with Bliss Salon Website

1. Introduction
    1.1 Purpose
    The purpose of this Software Requirements Specification (SRS) document is to define the functional and non-functional requirements for the Polish with Bliss Salon Website. This document serves as a reference for the design, development, testing, and deployment of the website, ensuring that all stakeholders have a clear understanding of the project's objectives, features, and expected behavior.

    The primary goal of the website is to establish a professional online presence for the salon by providing users with an intuitive and visually appealing platform to explore salon services, view the service portfolio, learn about the salon, read customer testimonials, and book appointments. The website will be fully responsive, offering a seamless user experience across mobile phones, tablets, laptops, and desktop devices.

    This document also acts as a foundation for future enhancements and ensures that the final product meets the business objectives, user expectations, and quality standards.

    1.2 Scope
    The Polish with Bliss Salon Website is a responsive web application designed to provide customers with an engaging and user-friendly platform to explore the salon's services and connect with the business online. The website will serve as the salon's digital presence, allowing potential and existing customers to access essential information and conveniently request appointments from any device.

    The scope of this project includes the design and development of a modern, responsive website that functions seamlessly across mobile phones, tablets, laptops, and desktop computers. The website will feature a visually appealing homepage, detailed service information, image galleries showcasing salon work, promotional offers, customer testimonials, contact information, and an appointment booking form. It will also include navigation that is intuitive and optimized for different screen sizes.

    The website will be developed with a focus on usability, accessibility, performance, and responsive design to ensure a consistent user experience across all supported browsers and devices. It will incorporate modern UI/UX principles, smooth interactions, and optimized performance to enhance customer engagement.

    The initial version of the website will not include user authentication, online payment processing, appointment management, or an administrative dashboard. These features may be considered as future enhancements based on business requirements. 

    1.3 Intended Audience
    This Software Requirements Specification (SRS) document is intended for individuals involved in the design, development, testing, and evaluation of the Polish with Bliss Salon Website. It serves as the primary reference for understanding the project's objectives, system requirements, features, and expected behavior throughout the development lifecycle.

    The document is intended for:

    Frontend Developer – To implement the user interface and responsive functionality.
    UI/UX Designer – To design the website layout and user experience.
    Quality Assurance (QA) Engineer – To validate the implemented features against the specified requirements.
    Project Reviewers and Recruiters – To understand the project's scope, architecture, and implementation as part of a professional portfolio.

    This version is concise, realistic, and appropriate for a GitHub portfolio project. It shows that you understand professional documentation without implying a large team exists.

    1.4 Definitions, Acronyms and Abbreviations
    SRS- Software Requirements Specification
    UI- User Interface
    UX- User Experience 
    CTA- Call-To-Action
    MVP- Minimul Viable Product
    FR- Functional requirement 
    NFR- Non-Functional Requirement 
    SDLC- Software Development Lifecycle 
    SEO-Search Engine Optimization 
    API- Application Programming Interface 

2. Overall Description
    2.1 Product Perspective
    The Polish with Bliss Salon Website is a standalone responsive web application developed to establish a professional online presence for the salon. It enables users to browse salon services, explore the gallery, read customer testimonials, access contact information, and request appointments through an intuitive and user-friendly interface.

    The website is designed to be accessible across mobile phones, tablets, laptops, and desktop devices, providing a consistent and responsive user experience. The initial version focuses on presenting salon information and enhancing customer engagement, with the flexibility to support future enhancements such as online booking management, user accounts, and payment integration.

    2.2 Product Objectives
    The primary objective of the Polish with Bliss Salon Website is to provide a modern, responsive, and user-friendly platform that enhances the salon's online presence and improves customer engagement. The website is intended to showcase the salon's services and portfolio while making it easy for customers to access information and request appointments.

    The key objectives of the website are:

    -Provide a professional and visually appealing online presence for the salon.
    -Showcase salon services, pricing, and portfolio in an organized manner.
    -Allow customers to submit appointment requests through an online booking form.
    -Deliver a seamless and responsive user experience across mobile, tablet, laptop, and desktop devices.
    -Build customer trust by displaying testimonials, offers, and contact information.
    -Ensure the website is scalable and maintainable to support future feature enhancements.

    2.3 User Classes
    User Class
    Visitor: A user who accesses the website to explore salon services, view the gallery, read customer testimonials, check pricing, access contact information, and submit an appointment request through the booking form. Visitors have read-only access to the website content.

    2.4 Operating Environment
    The Polish with Bliss Salon Website is a client-side responsive web application that runs in modern web browsers without requiring any software installation. The website is designed to provide a consistent user experience across multiple devices and screen sizes.

    Supported Devices
    Mobile Phones
    Tablets
    Laptops
    Desktop Computers

    Supported Browsers
    Google Chrome
    Microsoft Edge
    Mozilla Firefox
    Apple Safari

    Development Environment
    Visual Studio Code
    Node.js
    Vite
    React
    Tailwind CSS

3. Functional Requirements ( Release MVP V1.0)
    3.1 FR-001 Navigation Module
    Priority: High
    Release: MVP (v1.0)

    Functional Requirements
    The Navigation Module shall:
    -Display the Polish with Bliss logo on the left side of the navigation bar.
    -Navigate users to the top of the homepage when the logo is selected.
    -Display the following primary navigation options on desktop devices:
        Services
        Pricing
        Contact
        Book Appointment (Primary Call-to-Action)
    -Provide a sticky navigation bar that remains visible while the user scrolls.
    -Adapt the navigation layout for mobile, tablet, laptop, and desktop devices.
    -Replace the desktop navigation with a hamburger menu on mobile devices.
    -Display the following navigation options within the mobile navigation drawer:
        About
        Services
        Pricing
        Offers
        Testimonials
        Contact
        Book Appointment
    -Position the salon logo on the left and the hamburger menu icon on the right in the mobile layout.
    -Open and close the mobile navigation drawer when the hamburger menu is selected.
    -Highlight the active navigation item based on the currently visible website section.
    -Support smooth scrolling when users navigate between sections.

    3.2 FR-002 Hero Section
    Priority: High
    Release: MVP (v1.0)

    Functional Requirements
    The Hero Module shall:
    -Display a full-screen (100vh) hero banner.
    -Utilize a full-width responsive layout across mobile, tablet, laptop, and desktop devices.
    -Display a rotating background image slideshow representing the salon's services and ambience (salon ambience, facials, hair spa, nail care, waxing/threading).
    -Automatically crossfade between background slides at a fixed time interval.
    -Apply a subtle background zoom (Ken Burns) animation to the active slide to enhance the visual experience.
    -Apply a semi-transparent brand-themed overlay to improve content readability.
    -Display the primary hero heading:
        YOUR BEAUTY.
        OUR EXPERTISE.
    -Display the following Call-to-Action (CTA) buttons:
    -Book Appointment (Primary CTA)
    -Explore Services (Secondary CTA)
    -Center all hero content both vertically and horizontally within the hero banner.
    -Include subtle entrance animations for the hero heading and CTA buttons.
    -Include hover animations for interactive buttons.
    -Disable the slideshow crossfade and zoom animation when the user has a reduced-motion preference enabled.

    Future Enhancements:
    The following features are outside the scope of MVP (v1.0) and are planned for future releases:
    -Background video showcasing salon services (facials, hair spa, nails, waxing, and salon ambience).
    -Text typing animation.
    -Parallax scrolling effect.
    -Floating background animations.
    -Scroll indicator / Scroll-down arrow.

    3.3 FR-003 The Bliss Experience Module

    Priority: High
    Release: MVP (v1.0)

    Functional Requirements
    -The Bliss Experience Module shall:
    -Display the section heading:
        THE BLISS EXPERIENCE
    -Display the supporting tagline:
        Because You Deserve More Than Just a Service.
    -Present four feature cards that communicate the salon's core values:
        Personalized Care
        Quality Products
        Hygiene & Comfort
        Client-First Experience
    -Display an icon, title, and short description within each feature card.
    -Arrange the feature cards in a responsive layout:
    -Four-column layout on desktop devices.
    -Two-column grid on tablet devices.
    -Single-column layout on mobile devices.
    -Feature Card Content
        -Personalized Care: Beauty services tailored just for you.
        -Quality Products: Carefully selected for beautiful, lasting results.
        -Hygiene & Comfort: A clean, relaxing, and welcoming space.
        -Client-First Experience: Every visit begins with your comfort.

    3.4 FR-004 Services Module
    Priority: High
    Release: MVP (v1.0)

    Functional Requirements
    The Services Module shall:
    -Display the section heading:
        OUR SERVICES
    -Display the supporting tagline:
        Beauty Tailored to Every Moment.
    -Present the salon's services using an interactive slideshow.
    -Display one service at a time within the slideshow.
    -Include the following services:
        Hair Spa
        Facials
        Waxing
        Nail Care
        Threading
    -Display a high-quality background image representing the active service.
    -Apply a subtle brand-themed overlay to improve text readability.
    -Display the service name as the primary slide heading.
    -Display a short tagline describing each service.
    -Automatically transition to the next service after a predefined time interval.
    -Display slide navigation indicators showing the current service.
    -Display a progress indicator representing the remaining time before the next automatic slide transition.
    -Allow users to manually navigate between services.
    -Reset the automatic slideshow timer whenever the user manually changes the active slide.
    -Support touch swipe gestures for slide navigation on mobile devices.
    -Ensure the slideshow is fully responsive across mobile, tablet, laptop, and desktop devices.
    -Service Content
        Hair Spa: Luxury Hair Care Starts Here.
        Facials: Reveal Your Natural Radiance.
        Waxing: Confidence in Every Touch.
        Nail Care: Elegance at Your Fingertips.
        Threading: Precision That Frames Your Beauty.

    3.5 FR-005 Pricing Module
    Priority: High
    Release: MVP (v1.0)

    Functional Requirements
    The Pricing Module shall:
    -Display the section heading:
        SERVICE PRICING
    -Display the supporting tagline:
        Transparent Pricing. No Hidden Charges.
    -Present all service prices using an expandable accordion interface.
    -Display the following pricing categories:
        Hair Spa
        Facials
        Waxing
        Nail Care
        Threading
    -Allow users to expand a pricing category to view its available services and corresponding prices.
    -Ensure that only one pricing category is expanded at a time.
    -Automatically collapse the previously expanded category when a new category is selected.
    -Display individual service names with their corresponding prices.
    -Display the Hair Spa duration and pricing range.
    -Include all available service options within their respective pricing categories.
    -Support smooth expand and collapse animations for accordion items.
    -Ensure the accordion is fully responsive across mobile, tablet, laptop, and desktop devices.
    -Pricing Content
    Hair Spa:
        Service	Price
        Luxury Hair Spa (45 Minutes)	$45 – $60
    Facials
        Service	Price
        Deep Cleansing	$30
        Brightening	$45
        O3+	$60
        D-Tan	$40
        Collagen & Hyaluronic	$40
        Wine	$45
        Fruit	$40
        VLCC	$45
        Bridal Facial Radiance	$70
        Glass Skin (Korean)	$70
        Bleach	$10
    Waxing
        Service	Price
        Under Arms	$10
        Half Arms	$20
        Full Arms	$25
        Brazilian	$50
        Bikini	$25
        Half Legs	$30
        Full Legs	$40
        Back	$30
        Full Body Wax	$120
    Nail Care
        Service	Price
        Bare Manicure	$35
        Spa Manicure	$45
        Bare Pedicure	$45
        Spa Pedicure	$55
    Threading
        Service	Price
        Brows	$10
        Wax Brows	$15
        Upper Lip	$5
        Chin	$5
        Forehead	$10
        Side Lock (Wax or Threading)	$10
        Full Face (Wax)	$30
        Full Face (Threading)	$25

    3.6 FR-006 The Heart Behind the Bliss Module

    Priority: Medium
    Release: MVP (v1.0)

    Functional Requirements
    The Heart Behind the Bliss Module shall:
    -Display the section heading:
        The Heart Behind the Bliss
    -Display the founder's introduction message.
    -Display the founder's name and designation.
    -Display the founder's professional photograph.
    -Arrange the module in a responsive two-column layout:
    -Founder introduction on the left.
    -Founder photograph on the right.
    -Stack the content vertically on mobile devices.
    -Maintain consistent spacing, typography, and visual hierarchy throughout the section.
    -Apply subtle entrance animations when the section enters the viewport.
    -Display the founder's photograph using a smooth fade-in animation.
    -Display the introduction text using a subtle slide-up animation.
    -Apply a slight hover effect to the founder's photograph on desktop devices.
    -Ensure all animations are smooth, non-intrusive, and trigger only once upon the initial scroll into view.
    -Ensure the module is fully responsive across mobile, tablet, laptop, and desktop devices.
    -Module Content
    -Section Heading
        The Heart Behind the Bliss

    Introduction

        Hey, I'm Haspinder,

        Polish with Bliss was created with a simple vision—to provide a welcoming space where every client feels comfortable, confident, and genuinely cared for. My goal is to deliver personalized beauty services with attention to detail, quality products, and a relaxing experience from the moment you arrive.

        I look forward to welcoming you and helping you look and feel your absolute best.

        With love,

        Haspinder
        Founder

    3.7 FR-007 Appointment Request Module 
    Priority: High
    Release: MVP (v1.0)

    Functional Requirements
    The Appointment Request Module shall:
    -Display the section heading:
        REQUEST AN APPOINTMENT
    -Display the supporting tagline:
        We're excited to welcome you. Request your appointment below.
    -Display an appointment request form for prospective clients.
    -Collect the following personal information:
        Full Name (Required)
        Phone Number (Required)
        Email Address (Optional)
    -Allow users to select one or more services using a multi-select dropdown with checkboxes.
    -Include the following service options:
        Hair Spa
        Facials
        Waxing
        Nail Care
        Threading
    -Allow users to select a preferred appointment date using a date picker.
    -Allow users to select a preferred time period:
        Morning
        Afternoon
        Evening
    -Provide an optional Additional Information text area with the placeholder:
        Skin sensitivity, special requests...
    -Validate all required fields before form submission.
    -Validate phone number and email address formats.
    -Display appropriate validation messages for invalid or incomplete input.
    -Display a loading indicator while the appointment request is being submitted.
    -Display a confirmation message after successful submission.
    -Clear the form after a successful submission.
    -Display an appropriate error message if the submission fails.
    -Ensure the form is fully accessible using proper labels, keyboard navigation, and visible focus indicators.
    -Ensure the module is fully responsive across mobile, tablet, laptop, and desktop devices.
    -Form Fields
        Full Name	
        Phone Number	
        Email Address		
        Select Service(s)	
        Preferred Date	
        Preferred Time		
        Additional Information	
	-Success Message
        Thank You!
        Your appointment request has been received successfully.
        We'll contact you shortly to confirm your preferred date and time.

    3.8 FR-008 Contact Module
    Priority: High
    Release: MVP (v1.0)

    Functional Requirements
    The Contact Module shall:
    -Display the section heading:
        CONTACT US
    -Display the supporting tagline:
        Questions? We're just a message away.
    -Display the salon location:
        Kitchener, Ontario
    -Display the salon email address:
        polishwithbliss@gmail.com
    -Display the salon's official Instagram profile:
        @polishwithbliss
    -Display the Instagram icon alongside the social media handle.
    -Allow users to open their default email application by selecting the email address.
    -Allow users to navigate to the salon's Instagram profile by selecting the Instagram handle.
    -Organize the contact information using responsive information cards.
    -Ensure the module is fully responsive across mobile, tablet, laptop, and desktop devices.
    -Module Content
        CONTACT US

        Questions? We're just a message away.

        📍 Address
        Kitchener, Ontario

        📧 Email
        polishwithbliss@gmail.com

        📱 Instagram
        @polishwithbliss (Instagram Icon)

    3.10 FR-010 Footer Module
    Priority: Medium
    Release: MVP (v1.0)

    Functional Requirements
    The Footer Module shall:
    -Display the Polish with Bliss logo.
    -Display the brand tagline:
        Beauty • Confidence • Self-Care
    -Display quick navigation links to the following website sections:
        Services
        Pricing
        Request Appointment
        Contact
    -Support smooth scrolling when a navigation link is selected.
    -Display the website copyright notice:
        © 2026 Polish with Bliss. All Rights Reserved.
    -Display the developer credit:
    -Designed & Developed by Haspinder Kaur.
    -Maintain consistent branding, typography, and spacing throughout the footer.
    -Ensure the footer is fully responsive across mobile, tablet, laptop, and desktop devices.
    -Module Content
    -Brand

        Polish with Bliss

        Beauty • Confidence • Self-Care

    -Quick Links
        Services
        Pricing
        Request Appointment
        Contact
        Copyright

    © 2026 Polish with Bliss. All Rights Reserved.

    3.11 FR-011 Responsive Layout
    Priority: High
    Release: MVP (v1.0)

    Functional Requirements
    The Responsive Layout Module shall:
    -Adapt the website layout automatically across desktop, laptop, tablet, and mobile devices.
    -Ensure all website sections remain fully functional and visually consistent across different screen sizes.
    -Maintain readable typography and appropriate spacing on all supported devices.
    -Resize images and multimedia content proportionally without distortion.
    -Adjust navigation for smaller screens using a hamburger menu and mobile navigation drawer.
    -Stack multi-column layouts vertically on smaller screen sizes where appropriate.
    -Ensure buttons, forms, and interactive elements remain accessible and easy to use on touch devices.
    -Prevent horizontal scrolling on supported screen sizes.
    -Maintain consistent branding, color scheme, and visual hierarchy across all devices.
    -Ensure smooth scrolling, animations, and transitions function correctly on all supported devices.
    -Supported Devices
    -The website shall support responsive layouts for:

    Device	Layout
    Desktop	Full-width multi-column layout
    Laptop	Optimized multi-column layout
    Tablet	Responsive two-column layout where appropriate
    Mobile	Single-column stacked layout 

4. Non-Functional Requirements
    4.1 Performance
    The system shall:
    -Load the homepage within 3 seconds under normal network conditions.
    -Optimize images and media to improve page loading speed.
    -Minimize HTTP requests by efficiently loading assets.
    -Ensure smooth scrolling, animations, and transitions without noticeable lag.
    -Maintain responsive performance across supported devices and modern web browsers.

    4.2 Usability
    The system shall:
    -Provide an intuitive and user-friendly interface.
    -Maintain a clean and consistent design throughout the website.
    -Ensure all navigation elements are easy to locate and use.
    -Present information in a clear and readable format.
    -Minimize the number of steps required to request an appointment.

    4.3 Accessibility
    The system shall:
    -Support keyboard navigation for all interactive elements.
    -Maintain sufficient color contrast between text and backgrounds.
    -Provide descriptive labels for form fields.
    -Display visible keyboard focus indicators.
    -Use semantic HTML elements where appropriate.
    -Ensure the website remains usable across different screen sizes and assistive technologies.

    4.4 Compatibility
    The system shall:
    -Support the latest versions of:
    -Google Chrome
    -Mozilla Firefox
    -Microsoft Edge
    -Safari
    -Function correctly on desktop, tablet, and mobile devices.
    -Adapt to different screen resolutions using responsive design principles.

    4.5 Security
    The system shall:
    -Validate all user inputs before processing form submissions.
    -Protect against common client-side vulnerabilities through proper input validation.
    -Use HTTPS for secure communication when deployed.
    -Prevent submission of invalid or malicious data.
    -Avoid exposing sensitive information in the client application.

    4.6 Reliability
    The system shall:
    -Remain available during normal operating conditions.
    -Display meaningful error messages when unexpected errors occur.
    -Handle invalid user inputs gracefully.
    -Maintain consistent functionality without unexpected f failures.

    4.7 Maintainability
    The system shall:
    -Follow a modular component-based architecture.
    -Use consistent naming conventions throughout the project.
    -Maintain clean, readable, and well-documented source code.
    -Separate application logic, styling, and reusable components.
    -Support future feature enhancements with minimal changes to existing modules.

    4.8 Scalability
    The system shall:
    -Support the addition of future modules without major architectural changes.
    -Allow integration of backend services in future releases.
    -Support future enhancements including:
    -Online booking system
    -Google Maps integration
    -Payment gateway
    -Administrator dashboard
    -Customer accounts
    -Maintain a scalable project structure for future development.

    4.9 SEO
    The system shall:

    -Use semantic HTML elements to improve search engine indexing.
    -Include descriptive page titles and meta descriptions.
    -Use meaningful heading hierarchy (H1–H6).
    -Optimize images using descriptive alternative text (alt attributes).
    -Generate search engine-friendly URLs.
    -Ensure responsive design to improve search engine ranking.
    -Optimize page loading performance to support SEO best practices.

    4.10 Code Quality
    The system shall:
    -Follow the Airbnb JavaScript Style Guide (or another defined coding standard).
    -Use ESLint and Prettier to maintain consistent code formatting.
    -Organize files using a modular folder structure.
    -Use meaningful variable, function, and component names.
    -Follow React best practices for component design and state management.

5. Future Enhancements
The following features are outside the scope of the MVP (v1.0) and are planned for future releases to enhance functionality, improve user experience, and support business growth.

5.1 Version 2.0 – Enhanced User Experience

The following enhancements are planned for the second release:
-Interactive appointment booking calendar.
-Real-time appointment availability.
-Time slot selection based on business hours.
-Prevention of double bookings.
-Google Maps integration.
-Offers & Promotions module.
-Testimonials module.
-Image gallery showcasing completed work.
-Instagram feed integration.
-Business hours display.
-Enhanced appointment confirmation messages.

5.2 Version 3.0 – Business Management

The following features will improve salon management and administrative capabilities:
-Administrator dashboard.
-Appointment management system.
-Service management.
-Pricing management.
-Gallery management.
-Customer inquiry management.
-Email notifications for appointment requests.
-Appointment approval, cancellation, and rescheduling.
-Working hours and holiday management.
-Analytics dashboard for appointments and customer activity.

5.3 Version 4.0 – Advanced Features

The following advanced features may be introduced as the business grows:
-Online payments.
-Customer accounts and profiles.
-Appointment history.
-Loyalty and rewards program.
-Gift cards and promotional coupons.
-WhatsApp integration.
-Google Calendar synchronization.
-SMS and email reminders.
-AI-powered virtual assistant.
-Online consultation requests.
-Multi-location salon support.
-Multi-staff appointment scheduling.

6. Conclusion

This Software Requirements Specification defines the functional and non-functional requirements for the Polish with Bliss salon website MVP. The document establishes a clear foundation for development while outlining a structured roadmap for future enhancements. By following a phased development approach, the project remains scalable, maintainable, and aligned with the long-term vision of delivering a modern, responsive, and user-centric digital experience.