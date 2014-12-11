window.techno.config = { 
	
		logo: 'http://www.gravatar.com/avatar/1aa315e981dd1bc800ee70a0757ab0d5.png',
		author: {			
				social: [
					{ 
						href: 'https://github.com/ningsuhen',
					  icon: 'fa-github',
						title: 'Github'
					},
					{ 
						href: 'https://twitter.com/ningsuhen',
					  icon: 'fa-twitter',
						title: 'Twitter'
					},
					{ 
						href: 'https://in.linkedin.com/in/ningsuhen',
					  icon: 'fa-linkedin',
						title: 'LinkedIn'
					},
					{ 
						href: 'mailto:ningsuhen@waikhom.com',
					  icon: 'fa-envelope',
						title: 'Email'
					},
					{ 
						href: techno.baseUrl + '/rss/',
					  icon: 'fa-rss',
						title: 'Rss'
					}
				]
		},
		disqus: {
				shortname: 'ningsuhen'
		},
		google: {
				analytics: function(ga) {
					var account ='[YOUR GA ACCOUNT]';
					var domain = '[YOUR GA DOMAIN]';

					ga('create', account, domain);
					//ga('require', 'displayfeatures');
					ga('send', 'pageview');
				}
		},

		menu: [
				{ route: '', text: 'Home'},
				{ route: techno.baseUrl + '/about', text: 'About'},
				{ route: techno.baseUrl + '/projects', text: 'Projects'}
		]
};
	
