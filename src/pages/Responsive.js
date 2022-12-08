export function Responsive() {
    return (
        <>
        <h1>Responsive Design</h1>
        <p>the project: The goal of this project was to find a website and improve its design 
            and responsiveness. I chose to redisgn the U.S Passport website, since it is a 
            crucial piece of infastructure to anybody who needs to apply for, renew, or do 
            anything regarding their American passport or Visa. The website is designed poorly, 
            and as a result, makes this critical process unnecessarily hard.</p>
        <p>the problems</p>
        <p>there are a miriad of problems with the original website</p>
        <li>There is too much information on this website - users are quickly overwhelmed by the number of buttons and possibilities. 
            This makes the learnability and memorability of the website poor</li>
        <li>Poor conceptual model - it is not an intuitive design for users to immediately start using</li>
        <li>Very little visual heirarchy/ visual flow - users are not given a clear path of what to do or look at</li>
        <li>Unneccessary features - are social media buttons really important to include on the page? Passport news?</li>
        <li>Missing features - most notably missing a "help" button</li>
        <h4>Accessibility issues</h4>
        <p>Considering that this is a government website being used by millions of users across the country and globe, and that the 
            range of demographics of people using this website is very larg, accessibility is an especially important aspect of this website.</p>
        <li>WAVE report: 13 errors, 2 contrast errors, 33 Alerts, 4 features, 86 structural elements, 28 ARIA</li>
        <li>9 elements missing alt texts</li>
        <li>The text is too small, readability is weak</li>
        <li>Poor text contrast on labels</li>
        <li>Only other available language is Spanish. However, not even all the text is translated when in Spanish mode</li>
        <li>Overall poor responsiveness and visual spacing on various screen sizes</li>
        <p>the process: Maximizing learnability, minimizing the 'Gulf of Evaluation', and visual
             heirachy were a few of the guiding principles.</p>
             <li>Cut out a lot of visual junk by compressing the navigation bar into a "hamburger menu"</li>
                <li>Cut out a lot of unnecessary features such as the social media buttons</li>
                <li>Made the website responsive by using media queries</li>
                <li>Improved the learnability and conceptual model by adding a "start" button and better visual heirarchy</li>
                <li>Improved accessibility with alt tags, multiple language support, larger text and elements, good contrast ratios for text, and adding a help button</li>
        <p>conclusion: Government websites in particular are crucial pieces of online infastructure. So many people with a very large range
            of abilities are using these websites for essential tasks. Yet as they stand, these websites prove to be unintuitive and poorly
            designed especially on mobile platforms. From a techincal standpoint, this project taught me how to use media queries in CSS to
             make websites accessible from many different types of devices. At a higher level, I learned that simpler designs are often better
             and was able to practice implementing design principles.        </p>
        </>
    )
}