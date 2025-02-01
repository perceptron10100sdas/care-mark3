## MediCate - Emergency Healthcare Management System
MediCate is a comprehensive healthcare management system that streamlines emergency services, hospital bed management, and ambulance coordination.

### **How it all Started?**
Originally developed for **HackOdisha 4.0** (2024), Medicate is an enhanced version of the **CareSetu** project, featuring a more intuitive UI and UX for a seamless user experience. With a focus on accessibility, real-time data, and efficiency, we aim to simplify healthcare services and ensure faster medical assistance when it’s needed most.

The idea for Medicate was driven by the need for a more efficient and accessible healthcare management system. We aimed to create a platform where users can locate nearby hospitals using GPS, check real-time bed availability, book OPDs and beds across different hospitals, and even find ambulances for inter-hospital emergency transfers—all in one place.

### **Meet the Team**

- **Adarsh Swain** – **Project Lead**  
  Led the ideation & execution of Medicate, integrating Google Maps API for location-based hospital searches, ensuring smooth feature integration.   

- **Swayam Subhankar Sahoo** – **Front-End & UI/UX**  
  Designed the intuitive user interface and optimized the user experience, focusing on front-end development to create responsive, engaging layouts.  

- **Sambhav Das** – **Front-End & UI/UX**  
  Worked on architecture and design, ensuring seamless integration of features and enhancing the overall user interface.  

- **Anshuman Pattnaik** – **Presenter & Designer**  
  Developed and presented the project, effectively showcasing key features to the audience .

### **Features**
- **Emergency Services**
  - Real-time emergency case management
  - Quick access to nearby hospitals
  - Instant hospital capacity information
  - Emergency contact coordination
- **Bed Management**
  - Live bed availability tracking
  - Automated bed allocation system
  - Patient transfer management
  - Real-time updates on bed status
- **Ambulance Services**
  - GPS-based ambulance tracking
  - Smart route optimization
  - Real-time driver coordination
  - Fare estimation based on distance

### **Tech Stack**
- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - Frontend library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Google Maps API](https://developers.google.com/maps) - Location and routing services
- [React Icons](https://react-icons.github.io/react-icons/) - Icon components

### **Project Structure**
```bash
medicate/
├── src/
│   └── app/
│       ├── about/           
│       │   └── page.js
│       ├── ambulance/          
│       │   ├── page.js
│       │   └── components/
│       ├── beds/              
│       │   ├── page.js
│       │   └── components/
│       ├── emergency/         
│       │   ├── page.js
│       │   └── components/
│       ├── components/        
│       │   ├── Header.js
│       │   ├── Footer.js
│       │   └── Layout.js
│       ├── lib/              
│       │   └── api.js
│       ├── styles/           
│       │   └── globals.css
│       ├── layout.js        
│       └── page.js          
├── public/                  
│   ├── images/
│   └── icons/
├── .env.local              
├── package.json
└── README.md
```

### **Getting Started**
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/medicate.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables: Create a .env.local file with your Google Maps API key:
    ```md
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
    ```
4. Run the development server:
    ```bash
    npm run dev
    ```
5. Open http://localhost:3000 in your browser

### **Key Components**
- **Emergency Dashboard:** Quick access to emergency services and nearby hospitals
- **Bed Management System:** Real-time bed availability tracking and booking
- **Ambulance Booking:** Location-based ambulance services with route optimization
- **Hospital Interface:** Dashboard for hospital staff to manage resources

### **Acknowledgments**
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Google Maps Platform](https://developers.google.com/maps/documentation)

<div align="center">
    <h3>Developed by The Outbreakers</h3>
</div>

