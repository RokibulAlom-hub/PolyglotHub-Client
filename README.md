b10a11-client-side-RokibulAlom-hub
  apiKey: "AIzaSyDLI2W-Wa1A-i0qvRjHHiLJLb-rDdsdwI4",
  authDomain: "polyglothub-54ecc.firebaseapp.com",
  projectId: "polyglothub-54ecc",
  storageBucket: "polyglothub-54ecc.firebasestorage.app",
  messagingSenderId: "871238644550",
  appId: "1:871238644550:web:5c3cc6f153cb7ef6baeb47"




   try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/get-all-tutors?language=${language}`
          
      );
      console.log(data);
      navigate('/findtutor')
    } catch (error) {
      console.error("Error getting data:", error);
    }