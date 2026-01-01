 const Orders = () => [
            {
                productName: 'Foldable Mini Drone',
                productNumber: '85631',
                paymentStatus: 'Due',
                shipping: 'Pending'
            },
            {
                productName: 'LARVENDER KF102 Drone',
                productNumber: '36378',
                paymentStatus: 'Refunded',
                shipping: 'Declined'
            },
            {
                productName: 'Ruko F11 Pro Drone',
                productNumber: '49347',
                paymentStatus: 'Due',
                shipping: 'Pending'
            },
            {
                productName: 'GPS 4K Drone',
                productNumber: '22821',
                paymentStatus: 'Paid',
                shipping: 'Delivered'
            },
            {
                productName: 'DJI Air 2S',
                productNumber: '81475',
                paymentStatus: 'Due',
                shipping: 'Pending'
            },
            {
                productName: 'Lozenge Drone',
                productNumber: '00482',
                paymentStatus: 'Paid',
                shipping: 'Delivered'
            }
        ];

        // ------------------
        // NAVIGATION LOGIC
        // ------------------
        function showSection(sectionId, element) {
            // Hide all sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active-section');
            });
            // Show target section
            const target = document.getElementById(sectionId);
            if(target) {
                target.classList.add('active-section');
            }

            // Update sidebar active class
            if(element) {
                document.querySelectorAll('aside .sidebar a').forEach(link => {
                    link.classList.remove('active');
                });
                element.classList.add('active');
            }

            // If on mobile, close sidebar after click
            if(window.innerWidth <= 768) {
                const sideMenu = document.querySelector("aside");
                if(sideMenu) sideMenu.style.display = 'none';
            }
        }

        function logout() {
            alert("Logged out successfully!");
            // In a real app, redirect to login page here
        }

        // ------------------
        // EXISTING JS LOGIC
        // ------------------
        const sideMenu = document.querySelector("aside");
        const menuBtn = document.querySelector("#menu-btn");
        const closeBtn = document.querySelector("#close-btn");
        const themeToggler = document.querySelector(".theme-toggler");

        //show sidebar
        if(menuBtn) {
            menuBtn.addEventListener('click', () => {
                sideMenu.style.display = 'block';
            })
        }

        //close sidebar
        if(closeBtn) {
            closeBtn.addEventListener('click', () => {
                sideMenu.style.display = 'none';
            })
        }

        //change theme
        if(themeToggler) {
            themeToggler.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');

                themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
                themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
            })
        }

        //fill orders in tables
        document.addEventListener('DOMContentLoaded', () => {
            const ordersData = Orders();
            
            // Fill Recent Orders (Dashboard)
            const recentTbody = document.querySelector('#recent-orders-table tbody');
            if(recentTbody) {
                // Show only first 5
                ordersData.slice(0, 5).forEach(order => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${
                            order.shipping === 'Declined'
                                ? 'danger'
                                : order.shipping === 'Pending'
                                ? 'warning'
                                : 'primary'
                        }">${order.shipping}</td>
                        <td class="primary">Details</td>
                    `;
                    recentTbody.appendChild(tr);
                });
            }

            // Fill All Orders (Orders Page)
            const allTbody = document.querySelector('#all-orders-table tbody');
            if(allTbody) {
                // Show all and duplicate to make list longer for demo
                const longList = [...ordersData, ...ordersData]; 
                longList.forEach(order => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${
                            order.shipping === 'Declined'
                                ? 'danger'
                                : order.shipping === 'Pending'
                                ? 'warning'
                                : 'primary'
                        }">${order.shipping}</td>
                        <td class="primary" style="cursor:pointer;">View/Edit</td>
                    `;
                    allTbody.appendChild(tr);
                });
            }
        });