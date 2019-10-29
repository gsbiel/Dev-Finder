'use strict';
import AsyncStorage from '@react-native-community/async-storage';
import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {authorize} from 'react-native-app-auth';

import {GitAppData} from './APIData';
export default class GitHubApi {
  /**
   * @returns {Promise<AxiosResponse<UserModel>>}
   */
  static async getUser() {
    const request = await this.getAxios();
    return request.get('/user');
  }

  /**
   * @static
   * @param {string} username
   * @returns {Promise<AxiosResponse<UserModel>>}
   */
  static async getUserByUsername(username) {
    const request = await this.getAxios();
    return request.get(`/users/${username}`);
  }

  /**
   * @static
   * @param {string} local
   * @param {number} page
   * @returns {Promise<AxiosResponse<ListUsers[]>>}
   */
  static async getUsersByLocation(local, page) {
    const request = await this.getAxios();
    return request.get(
      `/search/users?q=location:${local}&page=${page}&per_page=10`,
    );
  }

  /**
   * @static
   * @param {string} username
   * @returns {Promise<AxiosResponse<RepoListModel[]>>}
   */
  static async getRepos(username) {
    const request = await this.getAxios();
    return request.get(`/users/${username}/repos`);
  }

  /**
   * @static
   * @param {string} url
   * @returns {Promise<AxiosResponse<ListLanguages>>}
   */
  static async getLanguages(url) {
    const request = await this.getAxios();
    return request.get(`/repos/${url}/languages`);
  }


  /**
   * @returns {Promise<boolean|string>}
   */
  static async login() {
    const loginConfig = {
      serviceConfiguration: {
        authorizationEndpoint: 'https://github.com/login/oauth/authorize',
        tokenEndpoint: 'https://github.com/login/oauth/access_token',
      },
      clientId: GitAppData.clientId,
      clientSecret: GitAppData.clientSecret,
      redirectUrl: GitAppData.redirectUrl,
      scopes: GitAppData.scopes
    };
    try {
      const authState = await authorize(loginConfig);
      this.setToken(authState.accessToken);
      return authState.accessToken;
    } catch (error) {
      console.log('error', error);
      return false;
    }
  }

  /**
   * @param {string} token
   * @returns {Promise<void>}
   */
  static setToken(token) {
    return AsyncStorage.setItem('access_token', token);
  }

  /**
   * @returns {Promise<string>}
   */
  static getToken() {
    return AsyncStorage.getItem('access_token');
  }

  /**
   * @returns {Promise<AxiosInstance>}
   */
  static async getAxios() {
    const token = await this.getToken();
    return axios.create({
      baseURL: 'https://api.github.com',
      headers: {
        Authorization: `token ${token}`,
      },
    });
  }
}

/**
 * @typedef {Object} UserModel
 * @property {string} email
 * @property {number} followers
 * @property {string} image
 * @property {string} name
 * @property {string} site
 * @property {number} repositories
 * @property {string} username
 * @property {string} login
 */

/**
 * @typedef {Object} RepoListModel
 * @property {string} id
 * @property {string} name
 * @property {number} stars
 * @property {string} language
 */
