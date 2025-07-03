
        // TV State
        let isOn = true;
        let vhsFilter = false;
        let currentChannel = 1;
        
        // Elements
        const screen = document.getElementById('screen');
        const content = document.getElementById('content');
        const vhsFilterEl = document.getElementById('vhsFilter');
        const onBtn = document.getElementById('onBtn');
        const offBtn = document.getElementById('offBtn');
        const vhsBtn = document.getElementById('vhsBtn');
        const channelDial = document.getElementById('channelDial');
        const dialPointer = document.getElementById('dialPointer');
        const channelDisplay = document.getElementById('channelDisplay');

        // Project data
        const channels = {
            1: {
                title: "About Me",
                content: `
                    <div class="about-content">
                        <div class="vhs-tape">
                            <div class="vhs-label">JEN</div>
                        </div>
                        <div class="about-text">
                            <div class="project-title">About Me</div>
                            <div class="project-description">
                                Hi, My name is Jen!<br><br>
                                I am a game and web developer currently studying Digital Media at UCF. I specialize in spooky projects and unique web experiences! 
                            </div>
                            <div class="social-icons">
                                <div class="social-icon">💼</div>
                                <div class="social-icon">🐙</div>
                                <div class="social-icon">📧</div>
                                <div class="social-icon">📄</div>
                            </div>
                        </div>
                    </div>
                `
            },
            2: {
                title: "Sightseeing",
                content: `
                    <div class="project-title">Sightseeing</div>
                    <div class="project-image">🌲 Game Screenshot 🌲</div>
                    <div class="project-description">
                        Have you ever felt like going on a hike at night? What about eating random things in the forest when you're hungry? Well, in this 2D pixel horror game, you can do both!
                    </div>
                    <button class="play-btn">Play Now!</button>
                `
            },
            3: {
                title: "Project Alpha",
                content: `
                    <div class="project-title">Project Alpha</div>
                    <div class="project-image">🎮 Game Demo 🎮</div>
                    <div class="project-description">
                        A mysterious web-based interactive experience that blends reality with digital horror. Navigate through eerie environments and solve puzzles.
                    </div>
                    <button class="play-btn">Explore</button>
                `
            },
            4: {
                title: "Retro Portfolio",
                content: `
                    <div class="project-title">Retro Portfolio</div>
                    <div class="project-image">📺 Web Design 📺</div>
                    <div class="project-description">
                        This very interface you're using! A nostalgic TV-inspired portfolio showcasing projects through vintage aesthetics and interactive controls.
                    </div>
                    <button class="play-btn">View Code</button>
                `
            },
            5: {
                title: "Static Channel",
                content: `
                    <div style="font-size: 48px; color: #666;">📺</div>
                    <div class="project-title">No Signal</div>
                    <div class="project-description">
                        This channel is currently not broadcasting. Try another channel or check back later!
                    </div>
                `
            }
        };

        // Initialize
        updateDisplay();
        updateDialPosition();

        // Event listeners
        onBtn.addEventListener('click', () => {
            isOn = true;
            updateDisplay();
        });

        offBtn.addEventListener('click', () => {
            isOn = false;
            updateDisplay();
        });

        vhsBtn.addEventListener('click', () => {
            vhsFilter = !vhsFilter;
            updateDisplay();
        });

        channelDial.addEventListener('click', () => {
            currentChannel = currentChannel >= 5 ? 1 : currentChannel + 1;
            updateDisplay();
            updateDialPosition();
        });

        function updateDisplay() {
            if (!isOn) {
                screen.classList.add('off');
                content.classList.add('hidden');
                vhsFilterEl.classList.remove('active');
                return;
            }

            screen.classList.remove('off');
            content.classList.remove('hidden');
            
            if (vhsFilter) {
                vhsFilterEl.classList.add('active');
            } else {
                vhsFilterEl.classList.remove('active');
            }

            // Update content
            const channel = channels[currentChannel];
            if (channel) {
                content.innerHTML = channel.content;
            }
            
            channelDisplay.textContent = `CH: ${currentChannel}`;
        }

        function updateDialPosition() {
            // Calculate rotation based on channel (each channel is 30 degrees apart)
            const rotation = (currentChannel - 1) * 30;
            dialPointer.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
        }

        // Add some extra retro flair
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
                currentChannel = currentChannel >= 5 ? 1 : currentChannel + 1;
                updateDisplay();
                updateDialPosition();
            } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
                currentChannel = currentChannel <= 1 ? 5 : currentChannel - 1;
                updateDisplay();
                updateDialPosition();
            } else if (e.key === ' ') {
                e.preventDefault();
                isOn = !isOn;
                updateDisplay();
            }
        });
