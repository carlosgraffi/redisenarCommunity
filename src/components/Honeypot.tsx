
'use client';

import { useEffect } from 'react';

export default function Honeypot() {
  useEffect(() => {
    // Create a hidden form field that bots might fill out but humans won't see
    const form = document.createElement('form');
    form.style.display = 'none';
    form.setAttribute('aria-hidden', 'true');
    
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'website_field';
    input.id = 'website_field';
    input.autocomplete = 'off';
    
    const label = document.createElement('label');
    label.htmlFor = 'website_field';
    label.textContent = 'Leave this field empty';
    
    form.appendChild(label);
    form.appendChild(input);
    document.body.appendChild(form);
    
    // Check if the honeypot field was filled
    const checkHoneypot = () => {
      if (input.value.length > 0) {
        // Bot detected! Report it
        fetch('/api/report-bot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'honeypot',
            userAgent: navigator.userAgent,
          }),
        }).catch(() => {
          // Silent catch - we don't want to show errors to bots
        });
      }
    };
    
    // Check periodically
    const interval = setInterval(checkHoneypot, 5000);
    
    return () => {
      clearInterval(interval);
      document.body.removeChild(form);
    };
  }, []);
  
  return null;
}
