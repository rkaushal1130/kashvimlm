import React from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Settings, 
  LogOut,
  Sparkles
} from 'lucide-react';
import PageContainer from '../components/PageContainer';

/**
 * Logged-in Person Profile page for KASHVIMLM.
 * Displays user identity, membership tier, active session, and account details.
 */
function Profile() {
  const user = {
    name: 'Kashvi Sharma',
    username: '@kashvi_sharma',
    email: 'kashvi.sharma@kashvimlm.com',
    phone: '+91 98765 43210',
    location: 'Mumbai, Maharashtra, India',
    memberId: 'KV-2026-9042',
    memberSince: 'March 2024',
    tier: 'Gold Tier Member',
    status: 'Active (Logged In)',
  };

  const handleAction = (msg) => {
    alert(msg);
  };

  return (
    <PageContainer className="profile-page-wrapper">
      <div className="profile-card-container">
        {/* Profile Hero Header */}
        <div className="profile-hero-card">
          <div className="profile-hero-banner" />
          
          <div className="profile-hero-content">
            <div className="profile-avatar-wrapper">
              <div className="profile-avatar-circle">
                <span className="profile-avatar-initials">KS</span>
              </div>
              <span className="profile-status-indicator" title="Logged In">
                <span className="profile-status-pulse" />
              </span>
            </div>

            <div className="profile-identity-info">
              <div className="profile-identity-top">
                <h1 className="profile-name">{user.name}</h1>
                <span className="profile-badge-active">
                  <CheckCircle2 size={14} />
                  <span>Logged In</span>
                </span>
                <span className="profile-tier-badge">
                  <Award size={14} />
                  <span>{user.tier}</span>
                </span>
              </div>
              <p className="profile-username">
                {user.username} &bull; Member ID: <strong className="profile-id-text">{user.memberId}</strong>
              </p>
            </div>

            <div className="profile-hero-actions">
              <button
                type="button"
                className="profile-btn-primary"
                onClick={() => handleAction('Edit Profile modal is ready.')}
              >
                <Settings size={16} />
                <span>Edit Profile</span>
              </button>
              <button
                type="button"
                className="profile-btn-secondary"
                onClick={() => handleAction('You are currently securely logged in as ' + user.name)}
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="profile-stats-grid">
          <div className="profile-stat-card">
            <div className="profile-stat-icon-wrap stat-icon-blue">
              <Sparkles size={20} />
            </div>
            <div className="profile-stat-details">
              <span className="profile-stat-label">Account Status</span>
              <span className="profile-stat-value text-green">Active &amp; Logged In</span>
            </div>
          </div>

          <div className="profile-stat-card">
            <div className="profile-stat-icon-wrap stat-icon-pink">
              <Award size={20} />
            </div>
            <div className="profile-stat-details">
              <span className="profile-stat-label">Membership Rank</span>
              <span className="profile-stat-value">{user.tier}</span>
            </div>
          </div>

          <div className="profile-stat-card">
            <div className="profile-stat-icon-wrap stat-icon-blue">
              <Calendar size={20} />
            </div>
            <div className="profile-stat-details">
              <span className="profile-stat-label">Member Since</span>
              <span className="profile-stat-value">{user.memberSince}</span>
            </div>
          </div>

          <div className="profile-stat-card">
            <div className="profile-stat-icon-wrap stat-icon-pink">
              <ShieldCheck size={20} />
            </div>
            <div className="profile-stat-details">
              <span className="profile-stat-label">Security &amp; 2FA</span>
              <span className="profile-stat-value text-green">Verified &amp; Secure</span>
            </div>
          </div>
        </div>

        {/* Profile Information Cards */}
        <div className="profile-details-grid">
          {/* Personal Information */}
          <div className="profile-section-card">
            <div className="profile-section-header">
              <User size={18} className="profile-section-icon" />
              <h2 className="profile-section-title">Personal Information</h2>
            </div>

            <div className="profile-info-list">
              <div className="profile-info-row">
                <span className="profile-info-label">
                  <User size={15} /> Full Name
                </span>
                <span className="profile-info-value">{user.name}</span>
              </div>

              <div className="profile-info-row">
                <span className="profile-info-label">
                  <Mail size={15} /> Email Address
                </span>
                <div className="profile-info-email-group">
                  <span className="profile-info-value">{user.email}</span>
                  <span className="profile-verified-tag">Verified</span>
                </div>
              </div>

              <div className="profile-info-row">
                <span className="profile-info-label">
                  <Phone size={15} /> Phone Number
                </span>
                <span className="profile-info-value">{user.phone}</span>
              </div>

              <div className="profile-info-row">
                <span className="profile-info-label">
                  <MapPin size={15} /> Location
                </span>
                <span className="profile-info-value">{user.location}</span>
              </div>
            </div>
          </div>

          {/* Account & Session Settings */}
          <div className="profile-section-card">
            <div className="profile-section-header">
              <ShieldCheck size={18} className="profile-section-icon" />
              <h2 className="profile-section-title">Account &amp; Session Details</h2>
            </div>

            <div className="profile-info-list">
              <div className="profile-info-row">
                <span className="profile-info-label">Login Session</span>
                <span className="profile-info-value text-green font-medium">● Current Device (Active Now)</span>
              </div>

              <div className="profile-info-row">
                <span className="profile-info-label">Two-Factor Authentication</span>
                <span className="profile-info-value">Enabled (SMS + App)</span>
              </div>

              <div className="profile-info-row">
                <span className="profile-info-label">Account Type</span>
                <span className="profile-info-value">KASHVIMLM Official Member</span>
              </div>

              <div className="profile-info-row">
                <span className="profile-info-label">Notification Preferences</span>
                <span className="profile-info-value">Email &amp; In-App Alerts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Profile;
