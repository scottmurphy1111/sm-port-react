import React, { Component } from 'react';
import TopPanel from './TopPanel';
import SecondPanel from './SecondPanel';
import ThirdPanel from './ThirdPanel';
import FourthPanel from './FourthPanel';
import FifthPanel from './FifthPanel';

class Portfolio extends React.Component {
    constructor(props) {
		super(props)	
    }

     render() {
        console.log('p props', this.props);
        const content = this.props.content;
        
        return (
            <div>
                <TopPanel content={content} loadMainContent={this.props.loadMainContent} removeDelays={this.props.removeDelays} />
                <SecondPanel content={content} />
                <ThirdPanel content={content} />
                <FourthPanel content={content} />
                <FifthPanel content={content} />
            </div>
            
            // <div>
            //     <div id="portrait-only"><h2>PLEASE ROTATE YOUR PHONE BACK, PORTRAIT ONLY!</h2></div>
            //     <div class="container" ng-controller="PortfolioCtrl as portfolio" ng-init="portfolio.setUpPage()">
            //     <div class="panel">

            //         <div class="vert-nav" ng-class="{'show': portfolio.loadMainContent}">
            //             <ul>
            //                 <li class="active panel1" data-active="top-panel" vert-nav-item>
            //                 <span></span>
            //                 </li>
            //                 <li class="panel2" data-active="second-panel" vert-nav-item>
            //                 <span></span>
            //                 </li>
            //                 <li class="panel3" data-active="third-panel" vert-nav-item>
            //                 <span></span>
            //                 </li>
            //                 <li class="panel4" data-active="fourth-panel" vert-nav-item>
            //                 <span></span>
            //                 </li>
            //                 <li class="panel5" data-active="fifth-panel" vert-nav-item>
            //                 <span></span>
            //                 </li>
            //             </ul>
            //         </div>

            //         <on-scroll class="top-panel sliding-panel fade-in">
            //         <div class="panel-static">
            //             <div class="static-inner" ng-class="{'load-content': portfolio.loadMainContent, 'remove-delay': portfolio.removeDelays}">
            //             <h1>
            //                 <span class="logo" ng-include="'assets/images/portfolio/logo.svg'" ng-class="{'show': portfolio.loadMainContent, 'remove-delay': portfolio.removeDelays}"></span>
            //                 <span class="name" ng-class="{'show': portfolio.loadMainContent, 'remove-delay': portfolio.removeDelays}">{{content.name}}</span>
            //                 <br class="mobile-only" /
            //                 ><span class="title" ng-class="{'show': portfolio.loadMainContent, 'remove-delay': portfolio.removeDelays}">{{content.title}}</span>
            //             </h1>         
            //             <p class="tagline" ng-class="{'show': portfolio.loadMainContent, 'remove-delay': portfolio.removeDelays}" ng-bind-html="content.subHeading"></p>
            //             <div class="skills" ng-class="{'show': portfolio.loadMainContent, 'remove-delay': portfolio.removeDelays}">
            //                 <ul>
            //                 <li ng-repeat="skill in skills">
            //                     <span class="to-reveal">{{skill}}</span>
            //                     <span class="to-reveal pipe" ng-class="{'desktop-only': $index === 2 || $index === 4, 'hide': $index === 6, 'hide-tablet': $index === 3}">|</span>
            //                 </li>
            //                 </ul>
            //             </div>
            //             </div>
            //         </div>
            //         </on-scroll>

            //         <on-scroll class="second-panel sliding-panel fade-out">
            //         <div class="panel-wrapper">
            //             <div class="inner-wrap projects-list">
            //             <h2 class="category-title">{{panelTitles.projects}}</h2>
            //             <ul>
            //                 <li ng-repeat="project in projects">
            //                 <p><span class="icon" ng-include="project.icon"></span>{{project.companyName}} - {{project.role}}</p>
            //                 <ul>
            //                     <li ng-repeat="site in project.sites">
            //                     <a ng-if="project.companyName === 'Celerity IT'" class="proj-link" sm-modal ng-click="portfolio.chosenTemplate='app/components/portfolio/modal-templates/personal-loans.html'" href="#">{{site.name}}</a>
            //                     <a ng-if="project.companyName !== 'Celerity IT'" class="proj-link" ng-href="{{site.link}}" target="_blank">{{site.name}}</a>
            //                     </li>
            //                 </ul>
            //                 </li>
            //             </ul>
            //             </div>
            //         </div>
            //         </on-scroll>

            //         <on-scroll class="third-panel sliding-panel fade-out">
            //         <div class="panel-wrapper">
            //             <div class="inner-wrap snippets">
            //             <h2 class="category-title">{{panelTitles.coding}}</h2>
            //             <ul>
            //                 <li ng-repeat="code in coding">
            //                 <div class="code-link" ng-click="portfolio.showContent($index)">{{code.title}}</div>
            //                 <div class="content">
            //                     <p>{{code.description}}</p>
            //                     <img ng-src="{{code.image}}" />
            //                     <p class="testimonial-copy">{{code.testimonial}}</p>
            //                 </div>
            //                 </li>
            //             </ul>
            //             </div>
            //         </div>
            //         </on-scroll>

            //         <on-scroll class="fourth-panel sliding-panel fade-out">
            //         <div class="panel-wrapper">
            //             <div class="inner-wrap snippets">
            //             <h2 class="category-title">{{panelTitles.about}}</h2>
            //             <ul>
            //                 <li ng-repeat="bio in about">
            //                 <div class="code-link" reveal-content><span class="bio-icon left" ng-include="bio.icon"></span>{{bio.heading}}</div> 
            //                 <div class="content">
            //                     <p ng-bind-html="bio.description"></p>
            //                 </div>
            //                 </li>
            //             </ul>
            //             </div>
            //         </div>
            //         </on-scroll>

            //         <on-scroll class="fifth-panel sliding-panel fade-out">
            //         <div class="panel-wrapper">
            //             <div class="inner-wrap">
            //             <div class="special-note">
            //                 <h2 class="category-title">{{panelTitles.note}}</h2>
            //                 <p>{{specialNote}}</p>
            //             </div>
            //             <div class="block">
            //                 <h2 class="category-title">{{panelTitles.contact}}</h2>
            //                 <div class="contact">
            //                 <ul>
            //                     <li class="insert-phone"></li>
            //                     <li class="insert-email"></li>
            //                 </ul>
            //                 </div>
            //             </div>
            //             <div class="block">
            //                 <h2 class="category-title">{{panelTitles.social}}</h2>
            //                 <div class="social">
            //                 <ul>
            //                     <li ng-repeat="social in socials">
            //                     <a title="{{social.title}}" target="_blank" ng-href="{{social.link}}">
            //                         <div ng-if="social.title === 'Stack Overflow'" class="so-info-wrap">
            //                         <div class="so-tooltip">
            //                             <p>Reputation: {{totalSoRep}}</p>
            //                             <hr />
            //                             <p>Badges:</p>
            //                             <ul>
            //                             <li>Bronze: {{bronzeBadges}}</li>
            //                             <li>Silver: {{silverBadges}}</li>
            //                             <li>Gold: {{goldBadges}}</li>
            //                             </ul>
            //                         </div>
            //                         <div class="so-info rep">{{totalSoRep}}</div>
            //                         <div class="so-info badges">{{totalSoBadges}}</div>
            //                         </div>
            //                         <img ng-src="{{social.icon}}" />
            //                     </a>
            //                     </li>
            //                 </ul>
            //                 </div>
            //             </div>
            //             </div>
            //         </div>
            //         </on-scroll>
            //     </div>
            //     <div class="bg-image load-image"></div>
            //     <p class="enter" ng-class="{'load-icon': portfolio.loadMainContent, 'remove-delay': portfolio.removeDelays}">
            //         <span class="text"><span class="mobile-only">SWIPE&nbsp;</span><span class="desktop-only">SCROLL&nbsp;</span>UP / DOWN</span><br />
            //         <span class="icon" ng-include="'assets/images/finger-swipe.svg'"></span>
            //     </p>
            //     <div class="hide">Two Finger Swipe Down by Jeff Portaro from the Noun Project</div>
            //     <div class="modal-overlay" ng-click="portfolio.closeModal()"></div>
            //         <div class="modal-window">
            //         <div class="modal-inner">
            //             <div class="modal-display-data" ng-include="portfolio.chosenTemplate"></div>
            //         </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
};

export default Portfolio;