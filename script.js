/**
 * Andy Tran - Engineering Projects & DIY Hub JS Module
 */

// Comprehensive Project Data Object for Modal Dynamic Popups
const projectDetails = {
    'PCH01': {
        category: 'PC / COMPUTER HARDWARE',
        title: 'Complete Guide: Replace a Laptop Battery',
        tags: ['Disassembly method', 'Finding parts', 'Installing procedure'],
        content: `
            <p class="mb-3">Extend your laptop's lifecycle with an easy step-by-step battery replacement walkthrough using basic tools.</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">Technical Key Steps:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>Finding correct battery for a laptop.</li>
                <li>Step-by-Step walkthrough Disassembly.</li>
                <li>Verify correcting battery type and installing procedure.</li>
            </ul>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-cyan-400">
                // VERIFY RESULT: Successfully restored battery performance.
            </div>
        `
    },
    'pc2': {
        category: 'PC / COMPUTER HARDWARE',
        title: 'Multilayer PCB Component Repair & SPI BIOS Flashing',
        tags: ['Multimeter', 'Oscilloscope', 'Soldering', 'EEPROM Flashing'],
        content: `
            <p class="mb-3">Component-level diagnosis and physical repair of non-booting motherboard PCBs suffering from corrupted EEPROM BIOS chips or shorted ceramic SMD capacitors.</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">Diagnostic Procedure:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>Using a digital multimeter to test ground continuity and isolate shorted power rails.</li>
                <li>Hooking up an oscilloscope to probe SPI clock and MOSI/MISO pin signals.</li>
                <li>Desoldering corrupted SOP-8 flash ICs and reprogramming using CH341A hardware interfaces.</li>
            </ul>
            <div class="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-amber-400">
                // OUTCOME: Successfully restored 12+ dead server motherboard PCBs during RMA testing.
            </div>
        `
    },
    'pc3': {
        category: 'PC / COMPUTER HARDWARE',
        title: 'Banking Server HSM Security Integration & QC Workflow',
        tags: ['Banking Servers', 'HSM Hardware', 'ISO Compliance', 'ERP System'],
        content: `
            <p class="mb-3">System integration workflows for high-security enterprise banking servers embedded with Hardware Security Modules (HSM).</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">Key Quality & QC Processes:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>Assembly in accordance with ISO 9001 quality standards and static-safe environments.</li>
                <li>Flashing dedicated cryptographic security firmware onto HSM modules.</li>
                <li>Integrating component serial tracking with Acumatica ERP for end-to-end auditability.</li>
            </ul>
        `
    },
    'EES01': {
        category: 'ELECTRONICS / EMBEDDED',
        title: 'Smart Infortainment Upgrading for Toyota Prius 3rd Gen',
        tags: ['Wiring Instruction', 'Oem Backup Camera Setting', 'Disassembly/Installing procedure','Android Auto/Apple Carplay'],
        content: `
            <p class="mb-3">Transform your Toyota Prius 3rd Generation (2010–2015) with modern Android Auto, Apple CarPlay, and updated multimedia capabilities.</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">Technical Implementation:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>Disassembly and Installing unit procedure.</li>
                <li>Wiring Instruction for the unit.</li>
                <li>Setting & Retain the OEM Backup Camera.</li>
            </ul>
        `
    },
    'EES02': {
        category: 'ELECTRONICS / EMBEDDED',
        title: 'Automatic Light-Sensing Switch with LDR & MOSFET',
        tags: ['Voltage Divider', 'Photoresistor(LDR)', 'N-Channel MOSFET', 'Simulation'],
        content: `
            <p class="mb-3">Build a basic high-efficiency automatic night light using an N-Channel MOSFET and Photoresistor (LDR) for minimal standby power consumption.</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">Technical Highlights:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>Photoresistor or Light Dependent Resistor (LDR) to detect ambient light.</li>
                <li>Voltage divider to translate resistance changes into a dynamic control voltage</li>
                <li>N-Channel MOSFET to automatically toggle an LED load ON or OFF.</li>
            </ul>
        `
    },
    'EES03': {
        category: 'ELECTRONICS / EMBEDDED',
        title: 'Motion-Activated 120V Light Control System',
        tags: ['N-Channel Transistor', 'Relay Switching', 'PIR Sensor', 'Plyback Diode'],
        content: `
            <p class="mb-3">An isolated hybrid control circuit engineered to driver a 120V AC incandescent/LED lamp using low-power 4.5V DC passive infrared (PIR) sensing logic, transistor switching driver stage, inductive transient flyback suppression, and electromagnetic relay decoupling.</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">Technical Highlights:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>PIR Sensor monitors thermal radiation changes or motion change.</li>
                <li>NPN Transistor operate as a low-side electronic switch to energize the 5v relay coil.</li>
                <li>Electromechanical relay contact physically close, compeleting 120V AC circuit path.</li>
                <li>Flyback Diode safely redirects and dissipates this reverse transient energy</li>
            </ul>
        `
    },
    'IT01': {
        category: 'IT / NETWORKING',
        title: 'Upgrading & Basic Setting Up a SOHO Router Wi-Fi',
        tags: ['Wi-Fi7(802.11be)', 'Installing Instruction', 'WIFI Management'],
        content: `
            <p class="mb-3">A complete step-by-step documentation detailing the installation, wall mounting, mobile/web configuration, and performance verification of a next-generation Wi-Fi 7 small office/home office router.</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">Technical Highlights:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>Next-generation Wi-Fi7 technology.</li>
                <li>Wiring and Installing a SOHO router device effectively.</li>
                <li>Setting and Managing Wi-Fi network.</li>
            </ul>
        `
    },
    'net2': {
        category: 'IT / NETWORKING',
        title: 'High-Availability TrueNAS Core/SCALE File Server',
        tags: ['TrueNAS', 'ZFS RAID', 'NFS / SMB', 'Data Security'],
        content: `
            <p class="mb-3">Building a dedicated Network Attached Storage (NAS) box using TrueNAS SCALE to house system backup images and software tools.</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">System Specs & Configuration:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>Configured 6x SAS drives in ZFS RAID-Z2 for double parity fault tolerance.</li>
                <li>Configured SMB shares with Active Directory / Local User permission lists.</li>
                <li>Set up automated ZFS snapshots scheduled every 24 hours.</li>
            </ul>
        `
    },
    'net3': {
        category: 'IT / NETWORKING',
        title: 'Mass OS Deployment via PXE Network Boot & Rescuezilla',
        tags: ['PXE Boot', 'Clonezilla', 'Rescuezilla', 'SysAdmin'],
        content: `
            <p class="mb-3">Deploying disk clone images to dozens of workstation systems simultaneously over the local network using PXE boot servers.</p>
            <h4 class="text-sm font-bold text-slate-100 font-mono mb-2">Deployment Strategy:</h4>
            <ul class="list-disc pl-5 space-y-1 mb-4 text-xs font-mono">
                <li>Configuring iPXE boot menus with custom HTTP/TFTP kernel images.</li>
                <li>Utilizing Clonezilla Multicast mode to image 15+ systems in under 10 minutes.</li>
                <li>Using Rescuezilla for quick bare-metal backup and partition cloning.</li>
            </ul>
        `
    }
};

// Category Filter Script
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categoryBlocks = document.querySelectorAll('.category-block');
    const projectCards = document.querySelectorAll('.project-card');
    const searchInput = document.getElementById('searchInput');
    const noResults = document.getElementById('noResults');

    // Filter by Category Buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-cyan-500', 'text-slate-950', 'shadow-md', 'active');
                btn.classList.add('text-slate-400');
            });
            
            button.classList.add('bg-cyan-500', 'text-slate-950', 'shadow-md', 'active');
            button.classList.remove('text-slate-400');

            const selectedCategory = button.getAttribute('data-category');
            applyFilters(selectedCategory, searchInput.value.toLowerCase().trim());
        });
    });

    // Search Input Event
    searchInput.addEventListener('input', (e) => {
        const activeCategory = document.querySelector('.filter-btn.active').getAttribute('data-category');
        const query = e.target.value.toLowerCase().trim();
        applyFilters(activeCategory, query);
    });

    // Core Filtering Function
    function applyFilters(category, query) {
        let visibleCardCount = 0;

        categoryBlocks.forEach(block => {
            const blockCategory = block.getAttribute('data-category-group');
            const cardsInBlock = block.querySelectorAll('.project-card');
            let visibleInBlock = 0;

            cardsInBlock.forEach(card => {
                const titleText = card.getAttribute('data-title').toLowerCase();
                const cardCategory = card.getAttribute('data-tags');
                
                const matchesCategory = (category === 'all' || cardCategory === category);
                const matchesSearch = (query === '' || titleText.includes(query));

                if (matchesCategory && matchesSearch) {
                    card.style.display = 'flex';
                    visibleInBlock++;
                    visibleCardCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Show or hide whole category section based on matches
            if (visibleInBlock > 0) {
                block.style.display = 'block';
            } else {
                block.style.display = 'none';
            }
        });

        // Toggle No Results Message
        if (visibleCardCount === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
    }

    // Theme Switcher Logic
    const themeToggleBtn = document.getElementById('themeToggle');
    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });
});

// Modal Control Functions
function openProjectModal(key) {
    const modal = document.getElementById('projectModal');
    const data = projectDetails[key];

    if (!data) return;

    document.getElementById('modalCategory').textContent = data.category;
    document.getElementById('modalTitle').textContent = data.title;
    
    let tagsHtml = `<div class="flex flex-wrap gap-1.5 mb-4">`;
    data.tags.forEach(t => {
        tagsHtml += `<span class="tech-tag">${t}</span>`;
    });
    tagsHtml += `</div>`;

    document.getElementById('modalBody').innerHTML = tagsHtml + data.content;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('modal-open');
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('modal-open');
}

// Close Modal on Outside Overlay Click
document.getElementById('projectModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeProjectModal();
    }
});