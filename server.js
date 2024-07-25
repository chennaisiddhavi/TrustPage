const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();

const saltRounds = 10; // Define saltRounds for bcrypt

const db = mysql.createConnection({
    host: 'bl5m0lwvhvqblbukw9nt-mysql.services.clever-cloud.com',
    user: 'uy39sf6qv8vhshwm',
    password: 'dB0OQZDMDHgVKZwtgtGP',
    database: 'bl5m0lwvhvqblbukw9nt',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('MySQL Connected...');
});

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS if needed

// POST request handler for signup
app.post('/signup', async (req, res) => {
    const { email, password, confirm_password } = req.body;
    console.log('Signup:', email, password, confirm_password);

    if (email && password && confirm_password) {
        if (password !== confirm_password) {
            res.status(400).send('Passwords do not match');
            return;
        }

        try {
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            console.log('Hashed Password:', hashedPassword);
            const query = 'INSERT INTO user (email, password) VALUES (?, ?)';
            db.query(query, [email, hashedPassword], (err, result) => {
                if (err) {
                    console.error('Error inserting data:', err);
                    res.status(500).send('Internal Server Error');
                    return;
                }
                console.log("Success");
                res.send('Signup successful');
            });
        } catch (error) {
            console.error('Error hashing password:', error);
            res.status(500).send('Internal Server Error');
        }
    } else {
        res.status(400).send('Email, password, and confirm password are required');
    }
});

// POST request handler for login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Login:', email, password);

    if (email && password) {
        const query = 'SELECT * FROM user WHERE email = ?';
        db.query(query, [email], async (err, results) => {
            if (err) {
                console.error('Error querying database:', err);
                res.status(500).send('Internal Server Error');
                return;
            }

            if (results.length === 0) {
                res.status(401).send('Invalid email or password');
                return;
            }

            const user = results[0];
            const hashedPassword = user.password;

            try {
                const passwordMatch = await bcrypt.compare(password, hashedPassword);
                console.log('Password Match:', passwordMatch);

                if (passwordMatch) {
                    res.send('Login successful');
                } else {
                    res.status(401).send('Invalid email or password');
                }
            } catch (error) {
                console.error('Error comparing passwords:', error);
                res.status(500).send('Internal Server Error');
            }
        });
    } else {
        res.status(400).send('Email and password are required');
    }
});

app.post('/save-details', (req, res) => {
    const {
        id, name, dob, mother_tongue, religion, marital_status, height,
        country, highest_degree, employee_in, annual_income, express_yourself,
        family_type, father_occupation, mother_occupation, brother, sister, family_living_location, contact_address, about_family
    } = req.body;

    // Check for required fields
    if (
        id && name && dob && mother_tongue && religion && marital_status && height &&
        country && highest_degree && employee_in && annual_income && express_yourself &&
        family_type && father_occupation && mother_occupation && brother && sister && family_living_location && contact_address && about_family
    ) {
        // Insert profile details
        const profileQuery = 'INSERT INTO user (id, name, dob, mother_tongue, religion, marital_status, height) VALUES (?, ?, ?, ?, ?, ?, ?)';
        db.query(profileQuery, [id, name, dob, mother_tongue, religion, marital_status, height], (err, profileResult) => {
            if (err) {
                console.error('Error inserting profile details:', err);
                res.status(500).send('Internal Server Error');
                return;
            }

            // Insert career details
            const careerQuery = 'INSERT INTO career_details (id, country, highest_degree, employee_in, annual_income, express_yourself) VALUES (?, ?, ?, ?, ?, ?)';
            db.query(careerQuery, [id, country, highest_degree, employee_in, annual_income, express_yourself], (err, careerResult) => {
                if (err) {
                    console.error('Error inserting career details:', err);
                    res.status(500).send('Internal Server Error');
                    return;
                }

                // Insert lifestyle and family details
                const lifestyleFamilyQuery = 'INSERT INTO lifestyle_family_details (id, family_type, father_occupation, mother_occupation, brother, sister, family_living_location, contact_address, about_family) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
                db.query(lifestyleFamilyQuery, [id, family_type, father_occupation, mother_occupation, brother, sister, family_living_location, contact_address, about_family], (err, lifestyleFamilyResult) => {
                    if (err) {
                        console.error('Error inserting lifestyle and family details:', err);
                        res.status(500).send('Internal Server Error');
                        return;
                    }

                    res.send('All details saved successfully');
                });
            });
        });
    } else {
        res.status(400).send('All fields are required');
    }
});


// Start the server
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});


// // POST request handler for profile details
// app.post('/profile-details', (req, res) => {
//     const { id, name, dob, mother_tongue, religion, marital_status, height } = req.body;
//     console.log('Profile Details:', { user_id, name, dob, mother_tongue, religion, marital_status, height });

//     if (user_id && name && dob && mother_tongue && religion && marital_status && height) {
//         const query = 'INSERT INTO profile_details (user_id, name, dob, mother_tongue, religion, marital_status, height) VALUES (?, ?, ?, ?, ?, ?, ?)';
//         db.query(query, [user_id, name, dob, mother_tongue, religion, marital_status, height], (err, result) => {
//             if (err) {
//                 console.error('Error inserting profile details:', err);
//                 res.status(500).send('Internal Server Error');
//                 return;
//             }
//             res.send('Profile details saved successfully');
//         });
//     } else {
//         res.status(400).send('All fields are required');
//     }
// });

// // POST request handler for career details
// app.post('/career-details', (req, res) => {
//     const { user_id, country, highest_degree, employee_in, annual_income, express_yourself } = req.body;
//     console.log('Career Details:', { user_id, country, highest_degree, employee_in, annual_income, express_yourself });

//     if (user_id && country && highest_degree && employee_in && annual_income && express_yourself) {
//         const query = 'INSERT INTO career_details (user_id, country, highest_degree, employee_in, annual_income, express_yourself) VALUES (?, ?, ?, ?, ?, ?)';
//         db.query(query, [user_id, country, highest_degree, employee_in, annual_income, express_yourself], (err, result) => {
//             if (err) {
//                 console.error('Error inserting career details:', err);
//                 res.status(500).send('Internal Server Error');
//                 return;
//             }
//             res.send('Career details saved successfully');
//         });
//     } else {
//         res.status(400).send('All fields are required');
//     }
// });

// // POST request handler for lifestyle and family details
// app.post('/lifestyle-family-details', (req, res) => {
//     const { user_id, family_type, father_occupation, mother_occupation, brother, sister, family_living_location, contact_address, about_family } = req.body;
//     console.log('Lifestyle and Family Details:', { user_id, family_type, father_occupation, mother_occupation, brother, sister, family_living_location, contact_address, about_family });

//     if (user_id && family_type && father_occupation && mother_occupation && brother && sister && family_living_location && contact_address && about_family) {
//         const query = 'INSERT INTO lifestyle_family_details (user_id, family_type, father_occupation, mother_occupation, brother, sister, family_living_location, contact_address, about_family) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
//         db.query(query, [user_id, family_type, father_occupation, mother_occupation, brother, sister, family_living_location, contact_address, about_family], (err, result) => {
//             if (err) {
//                 console.error('Error inserting lifestyle and family details:', err);
//                 res.status(500).send('Internal Server Error');
//                 return;
//             }
//             res.send('Lifestyle and family details saved successfully');
//         });
//     } else {
//         res.status(400).send('All fields are required');
//     }
// });