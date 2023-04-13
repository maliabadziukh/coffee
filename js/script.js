const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const coffeecup = entry.target.querySelector('.coffeecup');
      if (entry.isIntersecting) {
        coffeecup.classList.add('coffeecup-animation');
        return;
      }
      coffeecup.classList.remove('coffeecup-animation');
    });
  });

observer1.observe(document.querySelector('.section1'));

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const coffeebeans = entry.target.querySelector('.coffeebeans');
        if (entry.isIntersecting) {
        coffeebeans.classList.add('coffeebeans-animation');
        return;
        }
        coffeebeans.classList.remove('coffeebeans-animation');
    });
    });

observer2.observe(document.querySelector('.section2'));

const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const beanbundles = entry.target.querySelector('.beanbundles');
            if (entry.isIntersecting) {
                beanbundles.classList.add('beanbundles-animation');
            return;
            }
            beanbundles.classList.remove('beanbundles-animation');
        });
        });
    
observer3.observe(document.querySelector('.section3'));

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const tree1 = entry.target.querySelector('.tree1');
        const tree2 = entry.target.querySelector('.tree2');
        const tree3 = entry.target.querySelector('.tree3');
        const tree4 = entry.target.querySelector('.tree4');
        const tree5 = entry.target.querySelector('.tree5');
        const tree6 = entry.target.querySelector('.tree6');
        const tree7 = entry.target.querySelector('.tree7');
        const tree8 = entry.target.querySelector('.tree8');
        const tree9 = entry.target.querySelector('.tree9');
        if (entry.isIntersecting) {
            tree1.classList.add('tree01-animation');
            tree2.classList.add('tree02-animation');
            tree3.classList.add('tree01-animation');
            tree4.classList.add('tree02-animation');
            tree5.classList.add('tree02-animation');
            tree6.classList.add('tree01-animation');
            tree7.classList.add('tree02-animation');
            tree8.classList.add('tree01-animation');
            tree9.classList.add('tree01-animation');
            
        return;
        }
        
        tree1.classList.remove('tree01-animation');
        tree2.classList.remove('tree02-animation');
        tree3.classList.remove('tree01-animation');
        tree4.classList.remove('tree02-animation');
        tree5.classList.remove('tree02-animation');
        tree6.classList.remove('tree01-animation');
        tree7.classList.remove('tree02-animation');
        tree8.classList.remove('tree01-animation');
        tree9.classList.remove('tree01-animation');
      
    });
});

observer4.observe(document.querySelector('.trees'));

const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const clock1 = entry.target.querySelector('.clock1');
        const clock2 = entry.target.querySelector('.clock2');
        if (entry.isIntersecting) {
            clock1.classList.add('clock1-animation');
            clock2.classList.add('clock2-animation');
        return;
        }
        clock1.classList.remove('clock1-animation');
        clock2.classList.remove('clock2-animation');
    });
    });

observer5.observe(document.querySelector('.section5'));