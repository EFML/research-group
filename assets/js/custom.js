(function($) {
  $(document).ready(function () {
    var details = {
      meta_title: "IIIT Delhi XYZ Research Group",
      title: "Sample Title",
      body: "This is a research group about robots and other cool stuff",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      motivation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      news: [
        {title: "Sample News 1", url: "http://google.com"},
        {title: "Sample News 2", url: "http://google.com"},
        {title: "Sample News 3", url: "http://google.com"},
        {title: "Sample News 4", url: "http://google.com"},
        {title: "Sample News 5", url: "http://google.com"},
        {title: "Sample News 6", url: "http://google.com"}
      ],
      faculty: [
        {
          name: "Dr. Mohammad Hashmi",title: "Assistant Professor, IIIT Delhi",
          url: "https://www.iiitd.edu.in/~mshashmi/",
          image: "/assets/img/team/hashmi.jpg",
          description: "His interests: RF Electronics with particular emphasis on RF Measurements, RF and Mixed Signal Electronics, PA Design, Modeling and Linearization."
        },
        {
          name: "Dr. Vivek Ashok Bohara", title: "Assistant Professor, IIIT Delhi",
          url: "https://sites.google.com/a/iiitd.ac.in/vivek-ashok-bohara/",
          image: "/assets/img/team/vivek.jpg",
          description: "His research interests are wireless communication, cognitive and cooperative radios as well as wide band power amplifiers"
        },
        {
          name: "Dr. Sumit J Darak",title: "Assistant Professor, IIIT Delhi",
          url: "http://faculty.iiitd.ac.in/~sumit/",
          image: "/assets/img/team/sumit.bmp",
          description: "His interests: Application of machine learning algorithms and decision making policies for various wireless communication applications such as D2D communications, RF energy harvesting, centralized and decentralized cognitive radio networks etc." 
        },
        {
          name: "Dr. Anubha Gupta",title: "Associate Professor, IIIT Delhi",
          url: "https://www.iiitd.edu.in/~anubha/",
          image: "/assets/img/team/anubha.jpg",
          description: "Her interests: Signal modeling, multiresolution/ multiscale signal processing and applications, Wavelet Transform: Design and Applications, Biomedical Signal Processing: neuronal modeling,ECG, and EEG signal processing, Biomedical Image processing: microscopic image analysis(cancer research), EEG and fMRI signal processing, MRI image processing, Statistical SignalProcessing"
        }
      ],
      students: [
        {name: "Student 1"},
        {name: "Student 2"},
        {name: "Student 3"},
        {name: "Student 4"},
        {name: "Student 5"},
      ],
      publications: [
        {title: "Sample Research Publication .....................................", url: "http://google.com"},
        {title: "Sample Research Publication .....................................", url: "http://google.com"},
        {title: "Sample Research Publication .....................................", url: "http://google.com"},
        {title: "Sample Research Publication .....................................", url: "http://google.com"},
        {title: "Sample Research Publication .....................................", url: "http://google.com"},
        {title: "Sample Research Publication .....................................", url: "http://google.com"},
        {title: "Sample Research Publication .....................................", url: "http://google.com"},
      ],
      projects: [
        {title: "Sample Research Project",
          description: "We did something cool to get this and that and finally this does this which seems to be awesome",
          url: "http://google.com"},
        {title: "Sample Research Project",
          description: "We did something cool to get this and that and finally this does this which seems to be awesome",
          url: "http://google.com"},
        {title: "Sample Research Project",
          description: "We did something cool to get this and that and finally this does this which seems to be awesome",
          url: "http://google.com"},
        {title: "Sample Research Project",
          description: "We did something cool to get this and that and finally this does this which seems to be awesome",
          url: "http://google.com"},
        {title: "Sample Research Project",
          description: "We did something cool to get this and that and finally this does this which seems to be awesome",
          url: "http://google.com"},
        {title: "Sample Research Project",
          description: "We did something cool to get this and that and finally this does this which seems to be awesome",
          url: "http://google.com"}

      ]
    };

    //till here the variable stores the content of the website in form of json, which will be a different file in future. 
    // so any changes made are refleted in the website.
    var directives = {
      news: {
        url: {
          href: function(params) {
            return this.url;
          },
          text: function(params){
            return "";
          }
        }
      },
      faculty: {
        url: {
          href: function(params) {
            return this.url;
          },
          text: function(params){
            return "";
          }
        },
        image: {
          src: function(params) {
            return this.image;
          }
        }
      },
      publications: {
        url: {
          href: function(params) {
            return this.url;
          },
          text: function(params){
            return "";
          }
        }
      },
      projects: {
        url: {
          href: function(params) {
            return this.url;
          },
          text: function(params){
            return "";
          }
        }
      }
    };

    $('#everything').render(details,directives);
    $('.collapse').collapse();
  });
})(jQuery);