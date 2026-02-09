# Child Care Nursery School - Production Deployment Guide

This document provides step-by-step instructions for deploying the Child Care Nursery School application to the Internet Computer mainnet.

## Prerequisites

- DFX CLI installed and configured
- Internet Computer wallet with cycles for deployment
- All required static assets present in `frontend/public/assets/generated/`

## Pre-Deployment Checklist

### 1. Verify Static Assets

Ensure all required generated assets exist in `frontend/public/assets/generated/`:

- [ ] `school-logo.dim_512x512.png`
- [ ] `school-hero.dim_1600x600.png`
- [ ] `principal-dr-meera-verma.dim_800x800.jpg`
- [ ] `manager-mr-ajeet-verma.dim_800x800.jpg`

See `frontend/public/assets/generated/README.md` for details.

### 2. Build the Application

