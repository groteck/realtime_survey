# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
RealtimeSurvey::Application.initialize!
require 'pusher' 
Pusher.app_id = '19913' 
Pusher.key = '73eeab4587d011f092c8' 
Pusher.secret = '7d0c83c29528a7f0f0bc'
